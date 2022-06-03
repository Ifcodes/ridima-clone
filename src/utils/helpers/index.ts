import { useNavigate } from 'react-router-dom';
import { setProfileComplete } from '../../Entity/ProfileComplete';
export const handlePinChange = (val: string, setPin: Function) => {
  setPin(val)
}

export const navigateHome = () => {
  const navigate  = useNavigate()
  navigate("/home");
  setProfileComplete(true);
}