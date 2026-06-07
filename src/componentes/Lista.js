import axios from "axios";
import { useEffect, useState } from "react";
import music from '../assets/1-01. Title Screen.mp3';
import {useRef} from "react";
import '../App.css';

export default function Lista(){
    const [datos, setDatos] = useState([]);
    const [nextUrl,setNextUrl] = useState('');
    const [imagen, setImagen] = useState('');
    const [texto, setTexto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);
    const toggleAudio = () => {
     if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
    useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.3; // volumen bajo (0 a 1)
        audioRef.current.play().catch(err => {
            console.log("Autoplay bloqueado, se reproducirá al interactuar.");
        });
      }
    }, []);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(Response => {
            setDatos(Response.data.results);
            setNextUrl(Response.data.next);
        });
    }, []);

    useEffect(() => {
        if (texto !== '')
            axios.get('https://pokeapi.co/api/v2/pokemon/' + texto).then(Response => {
                setImagen(Response.data.sprites.other.home.front_default);
            });
    }, [texto]);

    return (
        <div className="pokedex-container">
            <audio ref={audioRef} src={music} loop autoPlay />
             <button className="music-toggle-button" onClick={toggleAudio}>{isPlaying ? '🎵 Pausar Música' : '▶️ Reproducir Música'}</button>
            <div className="pokedex-header">POKEDEX</div>

            <div className="pokedex-screen">
                <h2>{texto}</h2>
                {imagen !== '' && <img src={imagen} alt="pokemon" />}
                {descripcion && <p style={{ marginTop: '10px', fontSize: '0.95em' }}>{descripcion}</p>}
            </div>

            <div className="pokedex-input">
                <label>Buscar Pokémon por código:</label>
                <br />
                <input
                    type="number"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Ej: 25 para Pikachu"
                />
            </div>

            <ul className="pokemon-list">
                {
                    datos.map((item, index) => (
                        <li key={index}>
                            #{index + 1} {item.name}
                            <button onClick={() => {
                                axios.get(item.url).then(response => {
                                    setImagen(response.data.sprites.front_default);
                                    setTexto(item.name);
                                    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${item.name}`).then(resSpecie => {
                                     const textos = resSpecie.data.flavor_text_entries;
                                     const entradaES = textos.find(t => t.language.name === 'es');
                                     setDescripcion(entradaES ? entradaES.flavor_text.replace(/\f|\n/g, ' ') : 'Descripción no disponible.');
                                   });
                                    
                                });
                            }}>Imagen</button>
                        </li>
                    ))
                }
            </ul>

            <button className="siguiente-button" onClick={() => {
                if (nextUrl) {
                    axios.get(nextUrl).then(Response => {
                        setDatos(prevDatos => [...prevDatos, ...Response.data.results]);
                        setNextUrl(Response.data.next);
                    });
                }
            }}>
                Siguiente
            </button>
        </div>
    );
}