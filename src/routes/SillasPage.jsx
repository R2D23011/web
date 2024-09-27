import { SillaCatalog } from '../components/catalogo/SillaCatalog/SillaCatalog'

export const SillasPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%', minHeight:'600px'}}>
        <main>
          <SillaCatalog></SillaCatalog>
        </main>
    </div>
  )
}

