import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <>
    <div>DashboardPage 
      <Link to="/project/">Go to Project 123</Link>
      <Button>go home</Button>
      
    </div>

    </>
  )
}

export default DashboardPage