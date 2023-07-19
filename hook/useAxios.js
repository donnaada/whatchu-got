import { useEffect, useState } from 'react';
import axios from 'axios';


const useAxios = (config) => {

  const [res, setRes] = useState({});
  const [err, setErr] = useState({});

  useEffect(() => {
    const initialGet = async () => {
      try {
        let res = await axios(config);
        setRes(res.data);
      } catch (e) {
        setErr(e || e.message)
      }
    }
  }, [])

  const getPage = async (url) => {
    try {
      let res = await axios.get(url)
      setRes(res.data);
    } catch (e) {
      setErr(e || e.message)
    }
  }

  return {...res, err, getPage}
}

export default useAxios