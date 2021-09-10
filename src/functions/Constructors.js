export function AddItemToCart(title, productSize, decription, link, price) {
  this.id = Math.floor(Math.random() * 10000) + 1
  this.title = title + ' ' + productSize
  this.decription = decription
  this.link = link
  this.price = price
}

export function Order(uid, name, phone, DATA, address, comment, paymentType, totalOrderSum, deliveryDate) {
  this.id = Math.floor(Math.random() * 10000 + 1)
  this.uid = uid
  this.userName = name
  this.userPhone = phone
  this.items = DATA.map(item => {
    return {
      decription: item.decription,
      title: item.title,
      price: item.price,
      link: item.link
    }
  })
  this.address = address
  this.comment = comment
  this.paymentType = paymentType
  this.cost = totalOrderSum
  this.orderAcceptDate = new Date().toLocaleDateString()
  this.deliveryDate = deliveryDate
  this.status = 'Оформляется'
}
