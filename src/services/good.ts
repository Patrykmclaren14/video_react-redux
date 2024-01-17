export const fetchGoods = () => {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(['Apple', 'Banana', 'Pear'])
    }, 2000)
  })
}