import { useMemo, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useValidator = obj => {
  const { register, errors } = useForm();
  const [retrunObj, setRetrunObj] = useState({});
  useEffect(() => {
    Object.keys(obj).forEach(key => {
      setRetrunObj(prev => ({
        ...prev,
        [key]: register(obj[key]),
      }));
    });
  }, [obj]);

  const validate = useMemo(() => ({ retrunObj, errors }), [retrunObj, errors]);

  return validate;
};

export default useValidator;
