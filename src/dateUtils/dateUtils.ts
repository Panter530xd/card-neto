export const calculateDeliveryDates = (): {
  formattedToday: string;
  formattedDeliveryDate: string;
  formattedOneDayLater: string;
  formattedThreeDaysLater: string;
  formattedEightDaysLater: string;
} => {
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(deliveryDate.getDate() + 7);
  const oneDayLater = new Date(today);
  oneDayLater.setDate(oneDayLater.getDate() + 1);
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(threeDaysLater.getDate() + 3);
  const eightDaysLater = new Date(threeDaysLater);
  eightDaysLater.setDate(eightDaysLater.getDate() + 8);

  const formattedToday = today.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const formattedOneDayLater = oneDayLater.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const formattedThreeDaysLater = threeDaysLater.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const formattedEightDaysLater = eightDaysLater.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });

  return {
    formattedToday,
    formattedDeliveryDate,
    formattedOneDayLater,
    formattedThreeDaysLater,
    formattedEightDaysLater,
  };
};
