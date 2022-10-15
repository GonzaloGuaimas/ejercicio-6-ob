import axios from '../utils/axios.config'

export default function getRandomChuck(){
    return axios.get('/')
}