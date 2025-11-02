export const getWhatsAppNumber = (propertyId: string): string => {
  const phoneMapping: Record<string, string> = {
    'patliputra-saalt': '+917280056909',
    'narayana-greens': '+917909046993',
    'buddha-saalt': '+919709633313',
    'deoghar-saalt': '+919709633313',
  };

  return phoneMapping[propertyId] || '+919709633313';
};

export const createRoomBookingMessage = (
  hotelName: string,
  roomType: string
): string => {
  return `Hello Saalt Hotels, I want to book the ${roomType} room in ${hotelName}. How can I proceed?`;
};

export const openWhatsAppBooking = (
  propertyId: string,
  hotelName: string,
  roomType: string
): void => {
  const phoneNumber = getWhatsAppNumber(propertyId);
  const message = createRoomBookingMessage(hotelName, roomType);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
};
