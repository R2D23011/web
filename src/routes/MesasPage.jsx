import { MesasCatalog } from "../components/catalogo/MesasCatalog/MesasCatalog"
import { SillaCatalog } from "../components/catalogo/SillaCatalog/SillaCatalog"


export const MesasPage = () => {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height:'100%', minHeight:'600px'}}>
        <main >
          <MesasCatalog></MesasCatalog>
        </main>
    </div>
  )
}

