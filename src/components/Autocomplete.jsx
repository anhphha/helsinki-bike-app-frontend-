import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import * as React from "react";
import { useState, useCallback } from "react";
import { PushSpinner } from "react-spinners-kit";

export default function FreeSolo() {
  // console.log(process.env);
  const URL = process.env.REACT_APP_BIKE_URL;
  const [departureOptions, setDepartureOptions] = useState([]);
  const [returnOptions, setReturnOptions] = useState([]);
  const [departureValue, setDepartureValue] = useState("");
  const [returnValue, setReturnValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Declare a function to handle the search form submission
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    searchJourneys(
      departureValue,
      returnValue,
      setDepartureOptions,
      setReturnOptions,
      setLoading
    );
  };

  // // Declare a function to handle the search input change
  // const handleDepartureInputChange = (event) => {
  //   setDepartureValue(event.target.value);
  // };

  // const handleReturnInputChange = (event) => {
  //   setReturnValue(event.target.value);
  // };

  const searchJourneys = useCallback(
    (departureValue, returnValue) => {
      // if (!departureValue || !returnValue) {
      //   return;
      // }

      setLoading(true);

      fetch(
        `${URL}/search?departure_station=${departureValue}&return_station=${returnValue}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          // Use the data here
          setDepartureOptions(data);
          setReturnOptions(data);
          setLoading(false);
        })
        .catch((error) => {
          // Handle the error here
          console.error(error);
        });
    },
    [URL]
  );

  // console.log(departureOptions,returnOptions);

  React.useEffect(() => {
    searchJourneys(departureValue, returnValue);
  }, [departureValue, returnValue, searchJourneys]);
  console.log(departureValue, returnValue);

  // useEffect(() => {
  //   async function getData(value1,value2) {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3001/search?departure_station=${departureValue}&return_station=${returnValue}`
  //       );
  //       const result = response.data;
  //       setDepartureOptions(result);
  //       setReturnOptions(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   if (departureValue || returnValue) {
  //     getData(departureValue);
  //   } else {
  //     getData(returnValue);
  //   }
  // }, [departureValue, returnValue]);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <form onSubmit={handleSearchFormSubmit}>
        <Autocomplete
          id="free-solo-demo"
          getOptionLabel={(departureOptions) =>
            `${departureOptions.departure_station_name}`
          }
          options={departureOptions}
          sx={{ width: 300 }}
          noOptionsText={"No departure found"}
          renderOption={(props, departureOptions) => (
            <Box component="li" {...props} key={departureOptions}>
              {departureOptions.departure_station_name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Departure Station" />
          )}
          onInputChange={(event, newDepartureValue) => {
            setDepartureValue(newDepartureValue);
          }}
          inputValue={departureValue}
        />
        <br />
        <Autocomplete
          id="free-solo-demo_2"
          getOptionLabel={(returnOptions) =>
            `${returnOptions.return_station_name}`
          }
          options={returnOptions}
          sx={{ width: 300 }}
          noOptionsText={"No return found"}
          renderOption={(props, returnOptions) => (
            <Box component="li" {...props} key={returnOptions}>
              {returnOptions.return_station_name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Return Station" />
          )}
          onInputChange={(event, newDepartureValue) => {
            setReturnValue(newDepartureValue);
          }}
          inputValue={returnValue}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      <div className="loader-box">
        <PushSpinner size={30} color="#fff" loading={loading} />
      </div>
    </Stack>
  );
}

// <Stack spacing={2} sx={{ width: 300, margin: "auto" }}>
{
  /* <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          value={departureValue}
          onChange={handleDepartureInputChange}
        />
        &nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value={returnValue}
          onChange={handleReturnInputChange}
        />
        <br/>
        &nbsp;&nbsp;&nbsp;
        <button type="submit">Search</button>
      </form> */
}
{
  /* <Autocomplete
      //   id="free-solo-demo"
      //   freeSolo
      //   disableClearable
      //   options={departureOptions.map(
      //     (option) => option.departure_station_name
      //   )}
      //   renderInput={(params) => (
      //     <TextField
      //       {...params}
      //       label="Departure Station"
      //       InputProps={{
      //         ...params.InputProps,
      //         type: "search",
      //       }}
      //     />
      //   )}
      //   // value={departureValue}
      //   // // onChange={handleDepartureInputChange}
      //   // onChange={(event, newDepartureValue) =>
      //   //   setDepartureValue(newDepartureValue)
      //   // }
      /> */
}
{
  /* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={returnOptions.map((option) => option.return_station_name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Return Station"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        value={returnValue}
        // onChange={handleReturnInputChange}
        onChange={(event, new_return_value) => setReturnValue(new_return_value)}
      />*/
}
{
  /* <button type="submit">Search</button> */
}
// </Stack>
//   );
// }
