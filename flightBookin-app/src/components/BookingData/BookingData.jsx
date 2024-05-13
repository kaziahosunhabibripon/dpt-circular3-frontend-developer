/* eslint-disable react/prop-types */

const BookingData = ({ offer }) => {
  return (
    <tr className="rounded-none bg-slate-100 text-slate-700 text-md font-light text-center">
      <td className="border-b-[0.5px] h-8 border-red-600 font-normal">
        {offer?.itineraries?.map((time, index) => (
          <span key={index}>
            <span>
              {time?.segments?.map((segment, index) => (
                <p key={index}>
                  {segment.carrierCode} &nbsp;
                  {segment.aircraft}
                </p>
              ))}
            </span>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px] h-8 border-red-600 font-normal">
        {offer?.itineraries?.map((time, index) => (
          <span key={index}>
            <span>
              {time?.segments?.map((segment, index) => (
                <p key={index}>{segment.flightNumber}</p>
              ))}
            </span>
          </span>
        ))}
      </td>

      <td className="border-b-[0.5px] py-[32px] border-red-600 flex font-normal justify-center items-center">
        {offer?.class?.map((clx, index) => (
          <span key={index}>
            <p className="py-2">{clx[0]}</p>
            <p className="py-2">{clx[1]}</p>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px] h-11 border-red-600 font-normal">
        {offer?.fareBasis?.map((fare, index) => (
          <span key={index} className="py-4">
            <p>{fare[0]}</p>
            <p>{fare[1]}</p>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px] border-red-600 font-normal">
        {offer?.itineraries?.map((time, index) => (
          <span key={index}>
            <span>
              {time?.segments?.map((segment, index) => (
                <p key={index}>
                  {segment.departure.iataCode} - {segment.arrival.iataCode}
                </p>
              ))}
            </span>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px] border-red-600 font-normal">
        {offer?.itineraries?.map((time, index) => (
          <span key={index}>
            <span>
              {time?.segments?.map((segment, index) => (
                <p key={index}>{segment.arrival.at}</p>
              ))}
            </span>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px] border-red-600 font-normal">
        {offer?.itineraries?.map((time, index) => (
          <span key={index}>
            <span>
              {time?.segments?.map((segment, index) => (
                <p key={index}>{segment.departure.at} &nbsp; &nbsp;--- </p>
              ))}
            </span>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px] h-12 border-red-600 font-normal">
        {offer?.itineraries?.map((time, index) => (
          <span key={index} className="py-4">
            <p>{time.duration}</p>
          </span>
        ))}
      </td>
      <td className="border-b-[0.5px]  border-red-600 flex font-normal justify-center items-center">
        {
          <span className="pb-12">
            <p>{offer?.price}</p>

            <button
              type="submit"
              className="w-[100px] flex justify-center items-center  h-[35px] bg-indigo-900 text-white rounded-md font-medium hover:bg-indigo-600 outline-none"
            >
              SELECT
            </button>
          </span>
        }
      </td>
    </tr>
  );
};

export default BookingData;
