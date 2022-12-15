import { LocalizationContainer, TextLocation } from './styles';
import { MapPin } from 'phosphor-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// import * as constants from '../../../constants/constants';

type LocalizationType = {
  locality?: string;
  region_code?: string;
};

type ClientLocalizationType = {
  data: LocalizationType[];
};

type CoordsType = {
  latitude: number;
  longitude: number;
};

export function Localization() {
  const [clientLocalization, setClientLocalization] =
    useState<ClientLocalizationType>();
  const [coords, setCoords] = useState<CoordsType>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      position.coords.latitude !== undefined &&
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
    });
  }, []);

  useEffect(() => {
    if (coords) {
      axios
        .get(baseURL, {
          params,
        })
        .then((response) => {
          setClientLocalization(response.data);
        });
    }
  }, [coords]);

  const baseURL = `http://api.positionstack.com/v1/reverse`;

  const params = {
    access_key: '032e0c8e0a14a2682061819512a1a481',
    query: `${coords?.latitude},${coords?.longitude}`,
  };

  const localization: LocalizationType = {
    locality: clientLocalization?.data[0].locality,
    region_code: clientLocalization?.data[0].region_code,
  };

  if (!localization.locality) {
    localization.locality = 'Sua cidade';
  }
  if (!localization.region_code) {
    localization.region_code = 'ESTADO';
  }

  return (
    <LocalizationContainer>
      <TextLocation>
        <MapPin weight="fill" />
        {localization.locality} - {localization.region_code}
      </TextLocation>
    </LocalizationContainer>
  );
}
