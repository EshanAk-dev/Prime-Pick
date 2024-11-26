from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from .models import Cart, CartItem, Product
from .serializers import CartItemSerializer, DetailedProductSerializer, ProductSerializer
from rest_framework.response import Response

# Create your views here.

@api_view(["GET"])
def products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    serializer = DetailedProductSerializer(product)
    return Response(serializer.data)


@api_view(["POST"])
def add_item(request):
    try:
        # Get data from the request
        cart_code = request.data.get("cart_code")
        product_id = request.data.get("product_id")
        quantity = request.data.get("quantity", 1)

        # Validate input
        if not cart_code or not product_id:
            return Response({"error": "cart_code and product_id are required."}, status=400)

        cart, created = Cart.objects.get_or_create(cart_code=cart_code)
        product = get_object_or_404(Product, id=product_id)
        cartitem, created = CartItem.objects.get_or_create(cart=cart, product=product)

        # Update the quantity if the CartItem already exists
        if not created:
            cartitem.quantity += int(quantity)
        else:
            cartitem.quantity = int(quantity) 

        cartitem.save()

        # Serialize the CartItem
        serializer = CartItemSerializer(cartitem)
        return Response(
            {"data": serializer.data, "message": "Cart item added successfully."},
            status=201
        )
    except Product.DoesNotExist:
        return Response({"error": "Product not found."}, status=404)
    except ValueError:
        return Response({"error": "Invalid quantity value."}, status=400)
    except Exception as e:
        return Response({"error": str(e)}, status=400)
    

@api_view(['GET'])
def product_in_cart(request):
    cart_code = request.query_params.get("cart_code")
    product_id = request.query_params.get("product_id")

    cart = Cart.objects.get(cart_code=cart_code)
    product = Product.objects.get(id=product_id)

    product_exist_in_cart = CartItem.objects.filter(cart=cart, product=product).exists()

    return Response({'product_in_cart': product_exist_in_cart})
