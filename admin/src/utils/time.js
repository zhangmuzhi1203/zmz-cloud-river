export const getTime = () => {
  const currentHour = new Date().getHours()

  if (currentHour >= 6 && currentHour < 11) {
    return '早上'
  } else if (currentHour >= 11 && currentHour < 14) {
    return '中午'
  } else if (currentHour >= 14 && currentHour < 18) {
    return '下午'
  } else if (currentHour >= 18 && currentHour < 24) {
    return '晚上'
  } else {
    return '凌晨'
  }
}

