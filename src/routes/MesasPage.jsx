import { MesasCatalog } from "../components/catalogo/MesasCatalog/MesasCatalog"
import { SillaCatalog } from "../components/catalogo/SillaCatalog/SillaCatalog"


export const MesasPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%'}}>
        <main>
          <MesasCatalog></MesasCatalog>
        </main>
    </div>
  )
}

