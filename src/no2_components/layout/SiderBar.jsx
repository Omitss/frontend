import React from 'react'
import { Link } from 'react-router-dom' // Link가 뭐야? 오브젝트다 

const SiderBar = () => {
  return (
    <aside>
        <div>
            <div>
                <Link to = "/">Home</Link>            
            </div>
            <div>
                <Link to = "/todo">할일</Link>            
            </div>
            <div>
                <Link to = "/employee">고용인 정보</Link>            
            </div>
        </div>
    </aside>
  )
}

export default SiderBar
