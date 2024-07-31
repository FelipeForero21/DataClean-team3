# DATA CLEAN RIWI TEAM 3 API

## Overview

Esta API proporciona funcionalidades para la gestión y procesamiento de archivos CSV. Los usuarios pueden cargar archivos CSV y descargar los archivos procesados en formatos CSV y PDF. La API incluye registro de solicitudes para el seguimiento y autenticación mediante una clave API para un acceso seguro a los servicios.

## Features

- Carga y procesamiento de archivos CSV
- Generar y descargar archivos procesados en formato CSV y PDF
- Registro completo de solicitudes para el seguimiento
- Documentación de API con Swagger

## Installation

1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/your-repo/data-clean-riwi-team3-api.git
    cd data-clean-riwi-team3-api
    ```

2. **Instalar dependencias:**
    ```bash
    npm install
    ```

3. **Configurar variables de entorno:**
    Crear un archivo `.env` en el directorio raíz y agregar las variables de entorno necesarias. Ejemplo:
    ```env
    MONGODB_URI="mongodb+srv://elipeforero21:dJybd8CPBjePuhOF@assesment.yugiws4.mongodb.net/"
    API_KEY="añlsidjewefwee"
    ```

4. **Ejecutar la aplicación:**
    ```bash
    npm run start
    ```

## Usage

### Cargar Archivo CSV

- **URL:** `/api/v1/file/upload`
- **Método:** `POST`
- **Descripción:** Cargar un archivo CSV y procesarlo. El archivo CSV debe tener el siguiente formato:

    ```csv
    name,lastName,age,address
    John,Doe,30,"123 Main St"
    Jane,Smith,25,"456 Maple Ave"
    ```

- **Respuestas:**
  - `201`: Archivo procesado y PDF generado
  - `400`: Solicitud incorrecta

**Ejemplo de solicitud:**

```bash
curl -X POST http://localhost:3000/api/v1/file/upload \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/ruta/a/tu/archivo.csv'


