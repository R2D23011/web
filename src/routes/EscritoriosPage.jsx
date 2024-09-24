
import { EscritoriosCatalog } from '../components/catalogo/EscritoriosCatalog/EscritoriosCatalog'

export const EscritoriosPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <main>
          <EscritoriosCatalog></EscritoriosCatalog>
        </main>
    </div>
  )
}
