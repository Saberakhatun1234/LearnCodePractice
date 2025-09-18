import { Link } from "lucide-react"
import { navitem } from "./assets/data"


function Navbar() {
  return (
    <div>
        <div>
            <div>
                {navitem.map((item, index) => (
                    <div key={index}>
                        <Link to={item.url}>
                            {item.title}
                        </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar