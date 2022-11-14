let peakIndexInMountainArray = (x,l = 0,r = x.length -1) => {

    while (l !== r) {
         m = Math.floor(l + (r - l)/ 2)
        if (x[m] > x[m + 1]){
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
  };

  //one line:
  peakIndexInMountainArray=(x,l=0,r=x.length-1)=>{while(l!==r){m=Math.floor(l+(r-l)/2);if(x[m]>x[m+1]){r=m;}else{l=m+1;}}return l;}