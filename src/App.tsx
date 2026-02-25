import Presentation from "./components/Presentation";
import { slides } from "./slides";

export default function App() {
  return <Presentation slides={slides} />;
}
