const pagination = (users)=> {
  const itemsPerpage = 10
  const pages = Math.ceil(users.length / itemsPerpage)

  const newUsers = Array.from({length:pages}, (_, index)=>{
   const start = index * itemsPerpage
    console.log(pages)
   return users.slice(start, start + itemsPerpage)
  })
  return newUsers
}

export default pagination