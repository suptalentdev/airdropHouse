import { useSelector } from 'react-redux';
import { stateType } from '../../app/store';

import metadata from '../../data/structure/utility.json';
import {
  getAirDropHouses,
  getAirDropPay,
  getBankService,
  getDedicatedService,
  getOther,
  getRealEstateDiscount,
} from '../../helpers/getDataByType';

const FilteredData = () => {
  const filters = useSelector((state: stateType) => state.filters);

  const utilities = metadata.utilities;

  return (
    <>
      {filters.type === 'utilityType_label' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getDedicatedService(undefined, filters.type, filters.coOper)}
          {getRealEstateDiscount(1, filters.type, filters.coOper)}
          {getAirDropHouses(6, filters.coOper)}
          {getAirDropPay(7, filters.coOper)}
        </div>
      )}
      {filters.type === 'airdrop_houses' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getAirDropHouses()}
        </div>
      )}
      {filters.type === 'airdrop_down_pay' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getAirDropPay()}
        </div>
      )}

      {filters.type === 'real_estate_discount' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getRealEstateDiscount(undefined, filters.type, filters.coOper)}
        </div>
      )}
      {filters.type === 'dedicated_service' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getDedicatedService(undefined, filters.type, filters.coOper)}
        </div>
      )}
      {filters.type === 'other' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getOther(undefined, filters.coOper)}
        </div>
      )}
      {filters.type === 'bank_service' && (
        <div className='mt-[20px] md:mt-[47px] grid grid-cols-1 md:grid-cols-2 gap-[13px]'>
          {getBankService()}
        </div>
      )}
    </>
  );
};

export default FilteredData;
