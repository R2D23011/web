import './MainContent.css'

export const MainContent = () => {
  return (
    <div className="container-fluid">
        <h2 className="display-4" style={{textAlign:'center'}}>Titulo Generico</h2>
        <p className="p m-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed? Dolorum placeat sit libero eveniet aperiam id velit beatae illum dignissimos, distinctio atque voluptates? Magnam rem aspernatur ut facilis laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed? Dolorum placeat sit libero eveniet aperiam id velit beatae illum dignissimos, distinctio atque voluptates? Magnam rem aspernatur ut facilis laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed? Dolorum placeat sit libero eveniet aperiam id velit beatae illum dignissimos, distinctio atque voluptates? Magnam rem aspernatur ut facilis laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed? Dolorum placeat sit libero eveniet aperiam id velit beatae illum dignissimos, distinctio atque voluptates? Magnam rem aspernatur ut facilis laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed? Dolorum placeat sit libero eveniet aperiam id velit beatae illum dignissimos, distinctio atque voluptates? Magnam rem aspernatur ut facilis laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sed? Dolorum placeat sit libero eveniet aperiam id velit beatae illum dignissimos</p>
        <div className="container text-center" id='galeria'>
            <div className="row">
                <div className="col-lg-4 col-xs-12">
                    <img src='https://i.ibb.co/4dgF42H/Silla.jpg' className='figure-img img-fluid rounded' alt='imagen de silla'></img>
                    <figcaption>Silla</figcaption>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <img src='https://i.ibb.co/FXZdj8Z/Mesajpg.jpg'></img>
                    <figcaption>Mesas</figcaption>
                </div>
                <div className="col-lg-4 col-xs-12">
                    <img src='https://i.ibb.co/zVH2gBg/escritorio.jpg'></img>
                    <figcaption>Escritorios</figcaption>
                </div>
            </div>
        </div>
    </div>
  )
}
