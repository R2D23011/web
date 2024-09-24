import { SillaCatalog } from '../components/catalogo/SillaCatalog/SillaCatalog'

export const SillasPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <main>
          <SillaCatalog></SillaCatalog>
        </main>
    </div>
  )
}

