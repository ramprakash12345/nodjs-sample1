// settimeout fun to simulate download an image

const second = () => {
    setTimeout (()=> {
        console.log('download image takes 2 second');
    }, 2000);

}
const first = () =>{
    console.log('first func was called');
    second ();
    console.log('the code still running');
}
first();
