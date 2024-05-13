import { getItem } from "localforage";
import React, { useEffect, useState } from "react";
import BookingData from "../BookingData/BookingData";

const Booking = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    adults: "1",
    departure: "LHR",
    destination: "CDG",
    travel_date: "2024-05-14",
    extra_options: false,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(data[0]);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-2">
      <div className="flex flex-col bg-white">
        <div className="flex justify-center items-center py-6">
          <div className="w-28 cursor-pointer hover:bg-indigo-700 hover:text-white font-medium flex justify-center items-center h-10 px-2 border border-gray-900 outline-none">
            Round Trip
          </div>
          <div className="w-28 cursor-pointer hover:bg-indigo-700 hover:text-white font-medium flex justify-center items-center h-10 px-2 border border-gray-900 outline-none">
            One Way
          </div>
          <div className="w-28 cursor-pointer hover:bg-indigo-700 hover:text-white font-medium flex justify-center items-center h-10 px-2 border border-gray-900 outline-none">
            Multi city
          </div>
        </div>
        <form
          action="/search"
          method="get"
          className="flex flex-wrap border-t-[1px] border-b-[1px] border-indigo-700 justify-around items-center py-2"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center w-[100px] h-14">
            <select
              id="adults"
              name="adults"
              className="w-full flex items-center h-10 px-4 border-[1px] border-gray-900 outline-none"
            >
              <option value="LHR">LHR</option>
              <option value="CDG">CDG</option>
            </select>
          </div>
          <div className="flex justify-center items-center w-[100px] h-14">
            <select
              id="adults"
              name="adults"
              className="w-full flex items-center h-10 px-4 border-[1px] border-gray-900 outline-none"
            >
              <option value="CDG">CDG</option>
              <option value="LHR">LHR</option>
            </select>
          </div>
          <div className="flex justify-center items-center w-[150px] h-14">
            <input
              type="date"
              id="travel_date"
              name="travel_date"
              defaultValue="2024-05-14"
              className="w-full flex items-center h-10 px-2 border-[1px] border-gray-900 outline-none"
            />
          </div>
          <div className="flex  justify-center items-center w-[90px] h-14">
            <select
              id="departure"
              name="departure"
              className="w-full flex justify-evenly items-center h-10 px-2 border-[1px] border-gray-900 outline-none"
            >
              <option value="Day -">Day - </option>
            </select>
          </div>
          <div className="flex  justify-center items-center w-[90px] h-14">
            <select
              id="departure"
              name="departure"
              className="w-full flex justify-evenly items-center h-10 px-2 border-[1px] border-gray-900 outline-none"
            >
              <option value="Day +">Day + </option>
            </select>
          </div>
          <div className="flex  justify-center items-center w-[120px] h-14">
            <select
              id="departure"
              name="departure"
              className="w-full flex items-center h-10 px-2 border-[1px] border-gray-900 outline-none"
            >
              <option value="AnyTime">Any Time</option>
            </select>
          </div>
          <span className="flex justify-center items-center w-1 h-1 font-extrabold">
            <span className="px-8">+</span>
          </span>
          <div className="flex  justify-center items-center w-[100px] h-14">
            <select
              id="departure"
              name="departure"
              className="w-full flex items-center h-10 px-2 border-[1px] border-gray-900 outline-none"
            >
              <option value="ADT">ADT</option>
            </select>
          </div>

          <div className="flex  justify-center items-center w-[90px] h-14">
            <select
              id="adults"
              name="adults"
              className="w-full flex items-center h-10 px-4 border-[1px] border-gray-900 outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <span className="flex justify-center items-center w-1 h-1 font-extrabold">
            <span className="px-8">+</span>
          </span>
        </form>
        <div className="w-full flex border-b-[1px] border-indigo-700 justify-between items-center">
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              id="extra_options"
              name="extra_options"
              value="option"
              onChange={handleChange}
            />
            <label htmlFor="extra_options" className="ml-2 text-lg font-medium">
              Extra Options
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label className="inline-flex items-center">
              <span className="ml-2 text-lg font-medium">Environment</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-checkbox"
                name="Environment"
                value="dummy"
              />
              <span className="ml-2 text-lg font-medium">Dummy</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                className="form-checkbox"
                name="Environment"
                value="pdt"
              />
              <span className="ml-2 text-lg font-medium">PDT</span>
            </label>
          </div>

          <div className="w-[120px] py-2">
            <button
              type="submit"
              className="w-full bg-indigo-900 text-white py-2 font-medium rounded-md hover:bg-indigo-600 outline-none "
              onClick={handleSubmit}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        {loading ? (
          <p className="text-indigo-500 animate-spin">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-50 w-full">
              <thead>
                <tr className="rounded-none bg-slate-200 text-slate-700 text-sm font-medium">
                  <th className="py-2">FLIGHT</th>
                  <th className="py-2"> AIRCRAFT</th>
                  <th className="py-2">CLASS</th>
                  <th className="py-2">FARE</th>
                  <th className="py-2">ROUTE</th>
                  <th className="py-2">DEPARTURE</th>
                  <th className="py-2">ARRIVAL</th>
                  <th className="py-2">DURATION</th>
                  <th className="py-2">PRICE</th>
                </tr>
              </thead>

              <tbody>
                <>
                  {data?.flightOffer?.map((offer, index) => (
                    <BookingData key={index} offer={offer} />
                  ))}
                </>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
