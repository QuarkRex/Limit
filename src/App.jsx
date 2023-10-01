import  { useState, useEffect } from 'react';
import './App.css';

const Inicio = () => {

  return (
    <div className="inicio">
      <h1>Bienvenido a Limit</h1>
    <p>Escribe tu tarea </p>
    <p>Si no lo logras </p>
    </div>
  );
}






const Task = () => {
  const [task, setTask] = useState('');
  const [taskS, setTaskS] = useState('');


  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tarea guardada: ${task}`);
    setTaskS(task);
  };

  return (
    <div className="task-container">
      <form onSubmit={handleSubmit} className="task-form">
        <label className="task-label">
          Tarea:
          <input type="text" value={task} onChange={handleChange} className="task-input"/>
        </label>
        <input type="submit" value="Guardar" className="task-submit"/>
      </form>
      <div className="task-display"> {taskS} </div>
    </div>
  );
};







const Temporizador=()=> {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [activo, setActivo] = useState(false);

  const actualizarTiempo = (event) => {
    const { name, value } = event.target;
    if (name === 'horas') setHoras(parseInt(value));
    if (name === 'minutos') setMinutos(parseInt(value));
    if (name === 'segundos') setSegundos(parseInt(value));
  };

  const iniciarTemporizador = () => {
    setActivo(true);
  };

  const pausarTemporizador = () => {
    setActivo(false);
  };

  const reiniciarTemporizador = () => {
    setActivo(false);
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
  };

  useEffect(() => {
    let id;
    if (activo) {
      id = setInterval(() => {
        if (segundos > 0) {
          setSegundos(segundos - 1);
        } else if (minutos > 0) {
          setMinutos(minutos - 1);
          setSegundos(59);
        } else if (horas > 0) {
          setHoras(horas - 1);
          setMinutos(59);
          setSegundos(59);
        }
      }, 1000);
    }
    return () => clearInterval(id);
  }, [activo, horas, minutos, segundos]);

  return (
    <div className='container'>
      <h1>Temporizador</h1>

<div className='cont'>
      <input className="npt"  type="number" name="horas" onChange={actualizarTiempo} placeholder="H" />
      <input className="npt" type="number" name="minutos" onChange={actualizarTiempo} placeholder="M" />
      <input  className="npt" type="number" name="segundos" onChange={actualizarTiempo} placeholder="S" />
      </div>

<div className='conT'>
      <button onClick={iniciarTemporizador}>Iniciar</button>
      <button onClick={pausarTemporizador}>Pausar</button>
      <button onClick={reiniciarTemporizador}>Reiniciar</button>
      </div>

<div className='x'>  {horas}:  {minutos}:  {segundos} </div>

     
    </div>
  );
}



export default function App() {

return(
<div>

<Task/>
<Temporizador/>
<Inicio/>
</div>


)

}