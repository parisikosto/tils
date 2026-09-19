import { useState } from 'react';

interface Position {
  lat: number;
  lng: number;
}

export const useGeolocation = (): {
  isLoading: boolean;
  position: Position;
  error: string;
  getPosition: () => void;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({} as Position);
  const [error, setError] = useState('');

  const getPosition = () => {
    if (!navigator.geolocation) {
      return setError('Your browser does not support geolocation');
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });

        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  };

  return { isLoading, position, error, getPosition };
};
