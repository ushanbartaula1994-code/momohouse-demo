
function Map() {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] mt-8 rounded-xl overflow-hidden">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14125.970229433662!2d85.27221392723742!3d27.73294976913336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQzJzU4LjYiTiA4NcKwMTcnMjYuNCJF!5e0!3m2!1sen!2snp!4v1765985761777!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
