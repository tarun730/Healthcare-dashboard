import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            {/* <div className='headerfistsection'> */}
                <h3 className='healthcare'> <span>Health</span>care.</h3>
                <div className='searchsection'>
                    <span className='seachbutton'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVR4nN2UXUrDQBDH86Lew6+H+lJnkh3xBC2CB1NbCT750Jn4VPAGrYJWvYH1BIIHaBU/KiiT7LallGZTLYIDCyGZzG/3P//ZIPi3EUXJFiEfE3CXkJ/Tpc8gdVNulOYuXCqdLxPIiQH+JJSvaUu/GeQY8XSpcHEDcjFW7IOQWwakZlc7e+dA0i4E0Z2P/Xwdho3VyZxdTNYIuTPMQ469NXeyGOArPc3Mk6LcDuXy6UnaUCvLtJ1PBpV5w8ml8gW5P6A8ZABuBZ5hXL9A7vOTUfoWcOANQD6yJ+j57KZnJTr0BoDUskZLPzc5G6jMer4AQr7MJOKuB0Dqrslqxbz8KDrbNCADb6uq1UbTy51ZNq2sxysG+K6QTVMIcjw2xTdqxek7z4pbQDPwDR17ex24aR6kVlT59JIDuXCyjCZZ3gzKXjEIcpx72QE3tfhckFFPpKZDZGfkRd2Swq3mWvRHEJ/Y2ZaKAX615ninMNn/dYiZOAmFSXWhEEJ+ChYRFCZVAnk0KLwQwJ/ENxfpMBp9/uqEAAAAAElFTkSuQmCC" alt="search"/>
                        <input className='searchinput' type="text" name="" placeholder='Search' id="" />
                    {/* icon of notification */}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwklEQVR4nGNgGDHAwnC2ipnxvDsgDGJT3QIzo3mV5sbz/4MwiE01gz1UJrKbG8/PA7kcboHx/NtmxvNyQHKUudpsloyZ8byLMIMxsNG881aGc6TIdjlewxH4Alk+MTOaX0CE4TCcR7IF5sbzTxNrgZnx/BNk+GDeNxJ88JUcH/wnBY9a8H80iFCAufH8BlJTkZnR/A4GWhluTool5BpuTm5+oBswN5r/GFFMz39EfQtMFniCLTGa/8jCcL4H1S0YtAAAFhCFsL481OgAAAAASUVORK5CYII=" alt="bell--v1"></img>
                     </span>
                </div>
            {/* </div> */}

            <div className='actionsection'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE8klEQVR4nN3V609TZxwH8GZvtmT/wa5vd8n2Yp6W2ybBtaeUy7mUu84pAYuUIVZg2HMrUFC0RuwC9AKCG4VluCGO0hY0e7MIzMxLFrNFN9hcvDCjAtJyGZff8pwwghtIkdOy7Em+6ZPn0ueT85z+KpP9n5uRwmJZGrPxFDbMUvJHRhKbZylsXKAV/UZyy3aTSfbM5sAIxRscrbgipERMWLPj5k/qNdC6LxHaDIT4adfhYE6PnOAobLBY9fbzYcUx5DtqlpL763LeX2g3JEO7gVglyXB0x3tTHKXwhg3HJcvfRLiT+fFPgBFLaTMkg6BVTLEUNs3R8u9YAlOGFMjSimv1uaqFYHDty/JpYRLYdDjwtNzPUvIDIcEZk7eoyrURE0++VmJNKEfLAxy55S3JgRytOPVJ9rZ1Pb2m/HhoKUh4bMyaHTfHUfLPQgCU/95coAkad+qjBKjMiISKtCiw61RL4wjMUfI7kgMZEgu0FiUFhbPpcKhIj4TBljy42XsQqrKiwZ6Hi3Ou/cnAkPIZyYEsgc2hX+U/Ma1FSdBckACNe9Vgzd4G1VkxcDx3G9zoLobA5Woxv7hLRTBa6ypKAobEpqQHUtgjVIQRqjFfDUd2boXytEgwZ0aDZVcs1BXg0HUoE348Y1iCLc8X5alwYnccoNeEoxU3JQfytOIaeumde+PBnBENg6fyYHSwYkXMSrl+thgqM6LAplOhX/I3kgM5UmE9sStuHuG+d+mDhgUWMzpQgWBg+WDrNEtjJZIDD+fGVJkzohZYWi4etl5g4HI1evfAlBqxcCwvVnqgjVGNm1IjxEOeBhdYBKJrtnPKccmBDg4fbS5N3DDQxZFg5/BRyYGNPN7+5dHU2Y0COy0pcw4eb5UcWMfGverg8Yc2Vgn+S1XrxvkvVQHa6+Dwh/Us/rIsFK2eU77u4PDZB/2mdQPv9wsIN+sw4q/JQtmayjUDP7lXLsaBJwTtaSrXXJCFutlYfM+Z2rSJ9QI7a1P9NlaVE3Jgiyn2OYegHrnhORD8v0iPARy8+q61MP5ZWThaHat818mrAzfPl62J++18GTgFtd9mVMXIwtkcjDrRIahhoH0PjF2s/BcMjQ206dCTgwZGpZFtRmtglNBlTYcmIR7ONe6EexcEMaiPxtAcWrMpuL+Bw70lcN29H3z2HdBcoRGD+mgMzYUVmFT29SsE496nFXr7tbzvDjp8qLdEhKwUNIfWoLVoD8l6CknWJ32Rpj/2vETznnaK803mnrgYKHMNQ2XnCDTU5EOfc/eqwF7nLrAd0YtrD7qGIKf2YgB9B8172xKZ7hclwRGMh6ZYb6Cg4Yc/a7ofgMU7tpRjZ38FmzkTOmq3w+XTevjZe0AM6ncczwK7OUtcs3zPYfd9KGi4OkOxHj9xsJvYEI7kfMUppnN+U8etxw55DOm+C1aHExyHPgQ7rxGD+lZnI1jcI6vuEzpuQYqpz09zHsNTPzmt4PObu/5Y9RDLBlPddQ+0pj4/xbjJdb9z6FrLv7oTMpxlMabTt4HivH6itOuFoIEU7/tcb7s6HWqcZTH6hiszFO9tC7qUUKx3usb9MCw4i3cMatwPAJ2Jbm5NIKpzqJSEC2dZDDqTNHoK1wSiglrWOhRWnMU7BuhMreD7dk0gzXtHKs+sXh5ClcrOEaA53+0grrhnkmB6YJMyuSbwv9b+AitxYaX/iD+IAAAAAElFTkSuQmCC" alt="person-male"/>
                <img className='addbutton' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nGNgGFHg58+f/0F41AKc4OdoEBECP0d2EP2EaqYWZqC7BUM/DogBP0ctIAR+jgbRgAcRw2AEAONEKYjZ2Q4ZAAAAAElFTkSuQmCC" alt="plus"></img>
          
            </div>

        </div>
    )
}

export default Header