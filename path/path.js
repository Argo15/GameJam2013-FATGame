var Path = 
{
    nNumSamples: 1000,
    nBlurPasses: 1000,
    nPathHeights: new Array(),

    initialize: function() 
    { 
        for (var i=0; i<this.nNumSamples; i++)
        { 
            this.nPathHeights[i] = Math.random()-0.5;
        }
        for (var n=0; n<this.nBlurPasses; n++)
        {
            for (var i=0; i<this.nNumSamples; i++)
            { 
                if ( i > 0 && i < this.nNumSamples-1 )
                {
                    this.nPathHeights[i] = 0.25*this.nPathHeights[i-1] + 0.5*this.nPathHeights[i] + 0.25*this.nPathHeights[i+1];
                }
                else if (i == 0)
                {
                    this.nPathHeights[i] = 0.67*this.nPathHeights[i] + 0.33*this.nPathHeights[i+1];
                }
                else if (i == this.nNumSamples-1)
                {
                    this.nPathHeights[i] = 0.67*this.nPathHeights[i] + 0.33*this.nPathHeights[i-1];
                }
            }
        }
    },
    
    drawPath: function() {
        var canvas = document.getElementById('path');
        if (canvas.getContext) 
        {
            var ctx = canvas.getContext("2d");
            var nWidth = canvas.width;
            var nHeight = canvas.height;
            ctx.moveTo(0,this.nPathHeights[0]*nHeight/2);
            ctx.beginPath();
            for (var i=0; i<this.nNumSamples; i++)
            { 
                var xPos = i / this.nNumSamples * nWidth;
                var yPos = this.nPathHeights[i] * nHeight / 2;
                ctx.lineTo(xPos,nHeight/2 - yPos);
            }
            ctx.stroke();
        }
    },
    
    // get height for position between 0.0 and 1.0
    getHeight: function(position)
    {
        var index = position * this.nNumSamples-1;
        return this.nPathHeights[index];
    },
};