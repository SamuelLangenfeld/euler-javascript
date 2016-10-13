var sum=0;


for(var i=0;i<1000;i++){
	if (i%3!=0){
		if(i%5==0){
			sum+=i;
		}
	}
	if (i%3==0){
		sum+=i;
	}

}

document.getElementById("solution").innerHTML = sum;