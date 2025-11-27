const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Us</h1>
      <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
      <input type="text" className="border border-black p-2 m-2"  placeholder="message"/>
      <button className="border border-black p-2 m-2" >Submit</button>
    </div>
  )
}

export default Contact