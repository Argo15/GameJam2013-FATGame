var Noise = {
   
    var noise: function(var x)
    {
        x = (x<<13) ^ x;
        return ( 1.0 - ( (x * (x * x * 15731 + 789221) + 1376312589) & 7fffffff) / 1073741824.0);    
    },

    var smoothNoise: function(var x)
    {
        return noise(x)/2  +  noise(x-1)/4  +  noise(x+1)/4;
    },

    var interpolate: function(var a, var b, var x)
    {
	    var ft = x * 3.1415927;
	    var f = (1 - Math.cos(ft)) * .5;

	    return  a*(1-f) + b*f;
    }

    var interpolatedNoise: function(var x)
    {
      integer_X    = int(x)
      fractional_X = x - integer_X

      var v1 = smoothNoise(integer_X);
      var v2 = smoothNoise(integer_X + 1);

      return Interpolate(v1 , v2 , fractional_X)
    }


  function PerlinNoise_1D(float x)

      total = 0
      p = persistence
      n = Number_Of_Octaves - 1

      loop i from 0 to n

          frequency = 2i
          amplitude = pi

          total = total + InterpolatedNoisei(x * frequency) * amplitude

      end of i loop

      return total

  end function

}