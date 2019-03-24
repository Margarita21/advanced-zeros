module.exports = function getZerosCount(number, base) {
    var  k, kol = 0, kol_null = 0, f = 0, main=0;
	var d_base = base;

	for( var i = 2; i< base; i++){
		k = 0;
		while( d_base % i === 0){
			k = k + 1;
			d_base = d_base / i;
		} 
		if (k > 0 && f === 0){
			kol = k;
			main = i;
			f = 1;
		}
		if (k > 0){
			kol = k;
			main = i;
		}
	}
	if (main === 0)
	{
		kol = 1;
		main = base;
	}
	var s=0, st=1;
	while((number / Math.pow(main,st)) >= 1 ){
		s = s + Math.floor(number / Math.pow(main,st));
		st = st + 1;
	}
	if (kol>1)
	{
		s=Math.floor(s/kol);
	}
	return s;
}



