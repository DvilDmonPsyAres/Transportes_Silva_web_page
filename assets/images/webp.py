from PIL import Image


            # 1. Abre la imagen JPEG original
ruta_jpg = "gallery-023.jpeg"  # Cambia por .jpg si es necesario
imagen = Image.open(ruta_jpg)

            # 2. Guárdala en formato WebP real con buena calidad
ruta_webp = "gallery-02.webp"
imagen.save(ruta_webp, "WEBP", quality=80)

print("¡Imagen convertida con éxito a WebP!")
