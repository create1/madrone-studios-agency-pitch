#!/usr/bin/env python3
"""
Extract images from PDF deck
"""
import fitz  # PyMuPDF
import os
from PIL import Image
import io

def extract_images_from_pdf(pdf_path, output_folder):
    """Extract all images from a PDF file."""
    
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # Open the PDF
    pdf_document = fitz.open(pdf_path)
    
    image_count = 0
    
    # Iterate through each page
    for page_num in range(len(pdf_document)):
        page = pdf_document[page_num]
        
        # Get images on the page
        image_list = page.get_images(full=True)
        
        # Extract each image
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = pdf_document.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Save the image
            image_filename = f"slide_{page_num + 1}_img_{img_index + 1}.{image_ext}"
            image_path = os.path.join(output_folder, image_filename)
            
            with open(image_path, "wb") as img_file:
                img_file.write(image_bytes)
            
            print(f"Extracted: {image_filename}")
            image_count += 1
        
        # Also try to render the entire page as an image (for pages with vector graphics)
        try:
            # Render page to an image
            mat = fitz.Matrix(2.0, 2.0)  # 2x zoom for better quality
            pix = page.get_pixmap(matrix=mat, alpha=False)
            
            # Save the full page image
            page_filename = f"slide_{page_num + 1}_full.png"
            page_path = os.path.join(output_folder, page_filename)
            pix.save(page_path)
            
            print(f"Rendered full page: {page_filename}")
            image_count += 1
        except Exception as e:
            print(f"Could not render page {page_num + 1}: {e}")
    
    pdf_document.close()
    print(f"\nTotal images extracted: {image_count}")
    return image_count

if __name__ == "__main__":
    pdf_path = "/Users/jonathanrowe/Downloads/Mandrone-Studios-2026-Deck.pdf"
    output_folder = "images"
    
    print("Starting image extraction from PDF...")
    print(f"PDF: {pdf_path}")
    print(f"Output folder: {output_folder}\n")
    
    try:
        extract_images_from_pdf(pdf_path, output_folder)
        print("\n✓ Image extraction complete!")
    except Exception as e:
        print(f"\n✗ Error: {e}")
