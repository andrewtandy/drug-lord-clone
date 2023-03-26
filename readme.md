Drug Lord Clone project
Andrew Tandy 2023

26.03.23
- Finished styling the modal dialog
- Trying out some font and colour styles
- Written logic for buying products; checks if able to afford, store and then availability to buy
- Modal is populated with product information relating to action
- Only works on Buy button, need to refactor code to work on Sell and Dump actions

25.03.23
- Attempting to copy/style modal to match action dialogs


| ![2023-03-19_14-49-11](https://user-images.githubusercontent.com/54472417/227746575-83a82eea-78e5-4c8c-a880-093c75380e26.png) |
|:--:|
| ![image](https://user-images.githubusercontent.com/54472417/227746572-cea86c34-e822-4a90-b585-8aeecf98a1fa.png) |
| Still needs a bit of work, but slowly getting there! |

19.03.23
- Quite a bit done since last update
- Market place randomises data from a JSON file
- Refactored some button code
- Highlighting working semi-correctly
- Buy/Sell buttons disabled and enabled dependant on conditions
- Trying to get a modal to work for Buy/Sell actions

16.03.23
- Created some logic to event listen on items in market and inventory window, clicking item will highlight item in alternate window

| ![image](https://user-images.githubusercontent.com/54472417/225759890-98322f34-376e-45c3-b3bc-3bef3a01fe72.png) |
|:--:|
| ![image](https://user-images.githubusercontent.com/54472417/225760058-cbe9ea3f-a0fc-48ff-979d-e15f1d1d4e45.png) |
|:--:|
| <b>Selecting item will highlight in both windows differently</b> |

15.03.23
- Refactored button code to event listen to all button clicks and process logic dependant on button element id
- Added some simple hover CSS to items in tables

Quieter day today on coding. Will work on adding some further logic to the buttons on the buy and sell that updates either side The Market and Inventory windows next and have begun looking into local storage.

14.03.23
- Basic styling of imported data in The Market view
- Refactored code to be re-used in other windows as composable, now creates a table taking the element id for div container to load the JSON data file into (could be used for nested options too in the future)
-  Began implementing functionality into buttons, not as dynamic yet, but producing console logs depending on action taken

| ![image](https://user-images.githubusercontent.com/54472417/225149256-eeb030f0-50f8-4611-b471-469847983a31.png) |
|:--:|
| <b>Red outlines show basic styling of data as table</b> |

| ![image](https://user-images.githubusercontent.com/54472417/225149775-809d5aff-81e7-420d-87e8-b6086d52a309.png) |
|:--:|
| <b>Basic console logs of button actions</b> |



13.03.23
- Created pseudo marketplace data and stored as JSON file
- Imported data and created logic so it is viewable in "The Market" window
- Need to refactor at later date if possible into re-useable composable for other elements
- Need to style data view of "The Market"

| ![image](https://user-images.githubusercontent.com/54472417/224845030-16f760aa-6e9b-4d1f-8c97-03b4e4256853.png) |
|:--:|
| <b>She Uglee! But data from JSON pulled through!</b> |

12.03.23
- create project
- init git

- rough layout copy of game using css (see images for comparison)

| ![image](https://user-images.githubusercontent.com/54472417/224562154-dd902e96-3151-41a9-9f10-3ff3dae5e0f5.png) |
|:--:|
| <b>Drug Lord</b> |

| ![image](https://user-images.githubusercontent.com/54472417/224562376-0d7c53b0-b7ec-40c9-9cfe-e0c0b9facabe.png) |
|:--:|
| <b>Drug Lord Clone</b> |

