export const selectMap = (map) => {
    console.log("You clicked ", map);
    return {
        type: "MAP_SELECTED",
        payload: map
    };
};