import qrcode

# Data you want the QR to store
data = "https://www.instagram.com/yanahportugal/"

# Generate QR code
qr = qrcode.make(data)

# Save it to a file
qr.save("my_qr.png")