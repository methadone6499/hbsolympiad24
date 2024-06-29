import './Events.css'
import {useNavigate, Link} from "react-router-dom"

function Events(){

    return(
        <div className='Home'>
            <nav class="navbar">

                <div class="dropdown">
                    <button class="dropbtn"></button>
                    <div class="dropdown-content">
                        <div class="Login">
                            <button class="btn btn-sm">
                                <Link to="/login" class="links">Login</Link>
                            </button>
                        </div>
                        <div class="SignUp">
                            <button class="btn btn-sm">
                                <Link to="/signup" class="links">Sign Up</Link>
                            </button>
                        </div>
                    </div>
                </div>

                

                <ul class="nav-list">
                    <li>
                        <Link to="/events" class="links here">List of Events</Link>
                    </li>
                    <li>
                        <Link to="/ind_event_reg" class="links">Individual Event Registration</Link>
                    </li>
                    <li>
                        <Link to="/team_event_reg" class="links">Team Event Registration</Link>
                    </li>
                </ul>

                <div class="SearchBar">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </nav>

            <div class="box-main">
                <div class="firstHalf">
                    <img src='../../images/insta.png' />
                    <h1 class="text-big">
                        Events for the HBS Olympiad
                     </h1>
                    <p class="text-small">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                    </p>
                </div>
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Sports
                    </h1>
                    <div class="sports-box">
                        <div class="S-event">
                            <img
                                src="data:image/png;base64,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" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Football{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX///8AAADy8vIfU4n/wjkXPmf/1V0RL03MzMz19fX4+PgYQGr6+vogVY3/yDv/2l/R0dH/xTrV1dWqqqr/3mG7u7vt7e3/yjujo6Pc3NyCgoLj4+PExMRvb29UVFQdToG2traLi4s/Pz93d3cVFRWdnZ3zuTYIFiRfX18LHjI5OTlNTU2UlJQNDQ0PJ0EUNlouLi4HEx8ECxIbR3ZbW1uihzvxyViMdTOXfjcKGyy0iSh9XxwnJyccHBxLPxthUSPbt1AgGgzapjH/y0uKaR9ZRBR1WRqbdiPNq0u0lkJ8aC00KxMQDQZYSSAqQVPFliw+Lw7mrzNnTxdtWygnR2gcOVUvJxEsQE+CbTDBokciOEvlv1Owk0EkGwaVcyUxKRJMOhHVAZrrAAAXSklEQVR4nO2daVvbyLKAsTG2JBQvMjbe4wWDAWOWrCyZCSSEZEIOkNw7Z+ZOJpP//yuulq7ultQtdUstyDxP6tM5EyzrdVXXplb10tJP+Sk/xZN8W+sN60iGw4bWzj/0LakRvdlrjfo7Obbs9EetXvNfi9q0WpPBBoeNlr3dSctqPvTtSkq+1xmLwBHZGHd6/xZKUxu9koIjcjbXzIe+/TjJN/oJ6UD6jR9YlcZwtpeSz5VZQ39oFKZo/Wi8s/GsP+mM5h0Bxr2J9dA4QWm2OHgbO7NRvVG1Lc/0xFgCxP0nqyul7cMjzg9S/5GiSJu5+PYGnWG1azMZup4nonfRvx89cuXxE5uTiTlpPzQYkt6AcXf9qdXVTd3HhsQcob9ZebTsiou5v2BcZaY9NJwtvYPQfe3MtXxAcX7BSlwm8ujR8pP9w/C1HpqxF0rIBq32ksGHc5U4DSiRUD5e2Q5ecNx7QD5tN3A3u622GYPnSBPlO8fLIbEh94+DP1r1gfi6TwN3MmrrAni2GHP0iSdhRBty+XEpcOX+Q2QBRiCujYe2YxHByzvuFMWWxSMWoqPJ1YAiR/eezg39iXVfMw1BPEdM+Hkeswkdxid+5/qqca98XX+AmLSF1YeUaKFP7nOU6EIGjHV2j6Y69X1zpyvJ5ygR/URHEYRhxvo98XV9EaKfgM9WYgN9nOlraEafre7eixrrPsuxkvDZYiBfU4pUosP4xBchs1+Nxoz6urOGWHRgEY6QmcYAOoyrdKozyRiwTf+ec13Gf/pFhyutCiAu71PfutHNErBFfdOgaybmcxBRPsQLiYHlSJvqMDtAukiqJzZQT4ypsJm6jCvUd3cy4suPaQUmN1CkQwiJMd6UqJHKcnaNLAAt6kecLqVToCMm+sFivSlmpFZjFouxQS6/U021ApFA+n0oCBiwVOV1IxUF+/n0CrRF19D1uLlpSJ5QhLmhWsA5ufI0pYvBYqILButgvjz2tXOU5nAjsgB6KizUI0SuWSheeGa6RRPa3kCZkFLwILUPJWIgy4/Ovn2EgW7VXD3gblORhTqC24rCC5H2pioRCeAkon+WRF5JLsRHq7ksEAngSNkS9MRAC1E4ImJn+lLlWiRedK4YEEfEY/GFiG6l+AzfVWqPWs8OEEdEwdSUIny/RhCH6QBJJtNaUg1IXI1gamoTotz0a2XtK76zVN1UkovO1QPm803UDxGoEREh6ts8qxQpLabIUfMEULmJOmKihkFUx81PiMLFl7UihbiRvJeKW06qvSgQTrzLC2c1kHv/YhMW17BH3U0KiAveSTaAOKvZlg0X5w5hce0PuMGEJTFuWQzUxnkies/7AvEC6jG6pYpDWKz8msqhYi9zoDJV8xNW0VeIF1DoA8+LnvySwtsYeB13swIkT2ikCV97gJXn58m9De6L9tRVE2E5875DOCAuo9bp+wpCfI19hSwgzmWmGXkZV0z0iFw4IC6jruKfiLC49gFuVLIbDtlGrp+lBnE3Sry6WAQIi2u/wa3KPdOASLiTJZ9NiB4ji4d8RPgMExJvIxUV8eMzLTMv4xH2ZQlR2vaSEFb+gpuVKDOwjXayBcRJjXjPFBH+QemQLEVxO4UnvLtWtoB485B0V/jLWpFChMA/EwUcYvdkqWzLOGIYJi1QX0sT/koTFp9fy/lTHTbhjaptFYQeVrNd1XrD1rwz6ff7M0f6/UlnIEu4wiKs/Inu+JVY3IfGzG5V66Zls9XU7Q3n/d2DyH3D4oSoF/XJR0gSVKHOFHYzDU1rJmazFddsaq0Jb5t+QsJlRPiLn7D4HK4k4mxgp1PHSkio66bR1ub9MyE4ScInbMIKNDX68YDwvORMs0V+Geqm2W5MgvvdMicsVm7RpeK7NnBzraqmVSX3ARlmvjESs0u/CEd8PuF7dKlBHCA01wY2oCYTLHQz323NWLd/L4TFyhd0rbgHi7AfdihFaPsVax5nmkeHx8fb24vFogSyWKDHZeIP2LiERUjextGAqK2Qm1nOMhQMh8ZSez4O8lBkx9uL0v6KLashQYTi1ROfEHdtopUIi6jnAAqFQ91o1nl4R1s2moeywhZEKP0YmEGII8aOiAr7lhihbuQ19ksyGI6D5gk8LRMn5MRDV4kvBJQIKbenwjhC3ey2WOo72l7sr8TB0YRH0oSfGIRYiREJOOzEmlU9wsiAr5vtCeM1ki2XLh7OXZeoFtoSBoS8lElYASXyG2+oWnPytThCQ2e8ZnG0XRKmcwlRxS7xJJ9ZWwSVyO1KNQMq5BMa+WHIPI+2xZUHhKivJJ7SMOtDshKhZ8N7oQia3PUYQkOvhxIXeTyHEO2tEA+HQPgbkxD3FlscQlTg7FhaFKFh1oM59ZaccRJBnxdvl0IX40WFRVhc++T98wYbEFrs82oEoa4PA68BHS32k+ElcaWsXhutRCiF2fk3BDYMGCbUzV4gN3PUlwyPOJotYSPFhB/YhMUK6mcwfQ00LyZ8QrMdSK23E6vPJUSORtyVLj8K9ryDhOiZ4h7rLVSoKoYah9BoBl6TWSRXnyfSeffyMvJN7zmEOP9m9aSQesYam1DX6774fpSaD+ds4o5meRn9KK95hBXkaxh5DQTDUZVJaFr+AJ+eDy/DnIQK4enaXxzAYgXaw+GQCEbaYOlQ10eq+Ug0lFiGmJAHSHqnYTNFnnTXoggh8zY1XwTcVsG3gqOhzDJExdM1M+C7Ag3wUEsKtrPSRooI9bzPwxzvq+GDtFuidMLt0o98QmymQUJosdFG6hGaGp2iHSriswnR/ibxXW1xiTcyU3SnwSoRPUA4oI3U6WLo8PoOWjNp4p9fwJOKd6FikzbPTNHzxGD7Gy20Dm2kmqUbbTqHUbUAHcGeVMJIcUrzNYKwgvZKnfkBYX9X3U9oDim+o5I6PlsO5Y10+RH6EC+lcQmhwPDHC2jQaD6xJhSgSgWuECOV8aR49+VrPqAt6I/8b7kjbzmgVVhtUFXEkTIP4wl+k1nGSPGWqEjACqqD/VvBxuFlaNHDPBQrcAUHQ6lwD32o6wgjJQvR1xpuIhgq67boIKh2Ba6QskIqJyV9qEjCIlqIG/STNrSHba9HCKk6aUu5ArEKJUrDZbFgYQtsBaNn3KAOzS4YabVHNZoW6vlwqFiVI0SLl1PhYzNFiRu9+wT5zH4VfAx5Jq3axXiCiiDxbZeeoGDBrZ0QIeqb0oU+CutTj9CiKsEsLJSoUCpUkNctnkcC4m4N9Sgxj4i8eG9RAwW2s1BgYhVC3h0NSFwNaWWg6nfPTbutEQX4P1nw4apCUoXgaH6NNlJbkKshzhRlNGeOCqtUlFiU/pMJIVKh+JskiBAZd4wrtZPvj94fkvICXKnlS9SOSqXS/2axCkGFMlWFK4Hts3xC5ExJ6xvZ5aSqVcnTwEPnOfT/ZWCmeESCJB/O2bhNGhDoKY4wIcKaVynALe9Ru3pCrELx5zGeQEbzexwgdqakk4GK+KlFAI/RZgL1CxEaUHI59zLlaCIKfESItp6QzBR95XASAiz9VzkhlE2yKqRe64pVIpSIQUKiwW28IUS5mSYrm1zJCTqaIi4RccDPBYQCVG6moEK5sskReEVWAHAN/SmE/HYEYOm/iivfRGWTI7AMWdswQoSoLQyDF7UIQNVmCioUf5kLE6IgE1NYeIT/eH8LIb8RBajWTJOrEEfDmMLCI0QdRWjVDKMA1ZppChVC0RzPZxOibXxDBuFxEFBpWpOw8nUJ0Ue/CKgQb8oAQmpuyVYIUJWZOnuk8IxSxkjIWJFYhsUK2sVXDxGyABUQ2nT7+wtqbIdk2eQIVL+xSalL+IJDeMgCTGemzua9/dK2f/TqoTwgxIpbEUCcegcJj5iAyZXoGGZp4Z+44skTeUSUCv0hEA25hDzARLmps+qCqiMisYMGCcQKkZSNSxh2o8mU6PmUY84Ua0/EdyN6Ag8Or4WMlLcOmW7GU6J4SHQNkzejmxLJgAjThdg79mIJh3GEwpmbjRccAuyT8Qi30uWKJzDSqMdqNGEgHiJCticVN1PbNkODnIkczKa97pJJxtpJPfuFXEjMSEM5DcpLuZ5GKGCsrix4fiU3ntTbTdOd8K138XheibwGG6mYCkN5KYyJ4RPGKnGVq77dea+Zp0ZgG1X8T+IxA8K9oJGG2olQH0YQRirRjunM1bfTr2tGaL63SUoZ0ZgB4V7Qk4brQ6jxIwgjlLi6WgoH9b1Bp2GF6TxEPHBDOGYg+/9NUIWhGh/6NFGEXCWuhofh706rXcPkzwXDs65FYwYYqVi4dwR9INiJWkQhspW4uh/U37jVNeLmDhpyMQMKp39E+fAeTEy4I0DIiokh/3I2suKODfD2kUnFDAiGL0VVCP1S8n4Q+klD5X20Eu344OcbNJqCk6H1Ln4EGx8zcDAUKpxcwlDPe+T9B35iykJcLflzs74lMTjZIDO2YmPGI/Q9Ik02RBh6boGcW0RSEyJcXfEHiInk4HIqZsQhQp9UNBiynj0JhPwA4qrfQBMMnjfJk+bH0aPnYa2L8tmE6KVgsisKdkDHEOKIEfCg0gcHuEKOjziKRAQ/E/tclJJz7yPkGTA8x492prYSV9EKpPkGSQfPmzMRRMhnxP0M6zk+vHcYR+ja6eqKPwQmn9mqk83xfERQoWjSXWTuxYD9NDHO1LXT1f1AeTtOPDtDb+LNq0c8d4NDhXg+w9xPI+ZMXTsNH8uUfCCf3iQbrDlxEULFR4lVyNoTBdEplrDEGuDRSG6nTbLBk9lDxSrkvejEEta+NjieKG4h0gr89Bze8c8ln+imN8kGOlYCByoUeWiIBWWlvr2JsL80Om8r0VnoM2oc3DjFKRBdgrgIA8LjGKFePhgpmgLiHz2AYtNWJCDlQ/92nnHhWRRpRkfSWjxeDqoRvjJmJ5ufkLlHGPZ5RwFSdeCXivubkvmarRSIBnUylt+lYhUKVxWuoA/593lDmc9fiAsqSODdEPCmWC6npZhcp1Mb5v2LEf2o11IqZO/Vh/ctuAuR8jF/X5BfFM+gSuFtqFPKnDsglopV+EK4qihy37dYGnn/mZd8U4CfC7U35HJ4KR6kOTGBfq+DBH9490BqFXLfmYHdCmxAyolelQuFAkEkM5mfppkLZmpUoC15asSx8KWMCvF7T6GXncFIYgBP1gsFPyKezDhJM0TS6FKvHx26asRnPUipkPvuGuzeYyVupNa9vigXCgFEMgc21TxlnfY3jhpxUSHnSLnvH+LtClGAt5u1QiGE+Px3+PcUMSPvX4x2ngpFxbkMHzHS8DukEC9CZkri/GWBABYKxC7wHNhcPR1imx62ATYqsFGPEjDSPcZojBnbTAngqQ+QRsQONddId8pVPnwccuy29QAh/11uvDNqwQH85uejEcl8zVzKQ1rMXvBIdvH+kytR7+PDTIVjNuDVehCQRiRD7lMiGnn/VKaPa3JG+g0ZKfNkb7g0E/CEAUgb6gv8l2mP2jH9JwzffihKMJbRp9gzeODBHjFT4kVPyixAyqNWcFhMuRad6RQjnxr/+SrMWL5Bn+EMw0JmehQGvOEAUohruB5OjWg71cCEppfPKyKQhfXv3t9z5tPgGUOLYCZzwzTRoBYJYrqgkXemxASn4Hx5H6vIN4XaBfpr3owhCIlbAUCeiQYQi3iOv4Ix50Z+Ghgk9vHZX5Fe502hUD5Ff8s9eB7yJgeQVBPRgIVCDWsRV4t2fZ0WMbQcbfn0ociFtAFrd+jv+BPooeW25QOMMFEkDEPtpz8aSjeDA3Fs+fUDe0k6wbr8Fv1Rm0uIZ+6VSN+eFQe5lkohDlQcqWB2R8EMwNbks9chVbp3sYn+4CkfELdryKa0bzEmGkTEx4bkDtoKRvLrZnfKaNH+8+XD68oaVuYb9x7WQYWRx80HPFjuNJSqxVjqGgn9qWO/x2jo4el3jlx/evanbbE2JlICqPAgChArEclnYUCsRiqBU3VUomFWJ2Fj9eTTi683m5uFWrm8Do40UoXU8UCO3IrzFbBPXfuTXEDRcZeO06k/zfHl9vLdKdho5PjSgBKvNyVUSNS4Roqp3E5b1QEght6dRgy6JRKjQjIL2pYLScACWo2V5x/JRVLnN1h0wxSAjD/lgrwixE9G49RYodIbZZYKkMN+0B36ROCMWXj2/E4kEHIZKZeq5nBdDGmvSavFHfgucgAEnqt/J2+khLHygfraecIn/VxKw2z25hOWxQqd+wSp0mVSQpdx7a/fyfeOlTkcT5qWplWrltVojWbjMyqSjOLxlqjzLeJS7gipvbEXI0nh7NCobjXqTTKuq2pzVnsNaE9sCJ7XDX1L6WgRZKSCf25sqVEjzYeHIYFOhmKAJAG/TOhskLyp0Jaa6+QVJKrdEJ+mWbAgY08NwIKdTQo79RiLv1GIrxops7hmO4xHT0OSOF4O7zlLEPT9Ur65phhnyU1VZ6rPsVFygJo4IElP5TJTltQ2LylE21STMOo6W32uQGiMORSBZ6fvUtqpLes+NeZa8ssxAk+r4rac5BGIWPUCTYw4KW++oxEPhuKMer7JMc7QIpQ++hhvHEy9FB3GG9qp5sZDI55Rd+ja1Sg8W4P4zQbh87qw6PDR8zRREaRWuKIRcztD9rsYiM2Fi9QdAsSRcC/Bibl40kJ6b+PI+t1nH+NBvUuAHEFLrtm12WI0h6WHE/CI9hpfsAHI9DL4Uivf3PoYX3V6lpNcYqmKgmHBuTevyR0j+DnXaXpv4zIWTnxeNbfRHwqriyFV3NiQPoQUBP9EQk1TASkHlqNdkre0pIxkIJJcJKQFextvF40Sxs23AcaNSUPePB1AsneD+5giXsh7HwrCIpfReUdR2lqpoWSJvAxIIwPEWnnzW5BxbzCtSkFSw0clj8kNCpkokbbOoMVej+dByNxs2hM2V8pEpXOZoJBtg6rcDWI8+R5izA1GQ01ElRSgVEHBlhG+2DeViIVa7eJzmDG305/24iIjNXVNrDETI8Ti3yo01IK7IIPBw5ODvmOwfEzS4O/E374c4ueCkvSGSLl88/maBZnbmHXqPY2BSc/HVQRII96qSMN9UlvfPLlkIbrKHPSnw0aVttpqgzSDlQHSa/H8Qq2lupC1zSuG2wHZOxh0pkMHs+qfwa1kDYJQG7FVRg3MWC5vsnyrT5+zUaunUU/2FXhRWqhZUu9UL0ZEub558+5jmMyvT/I/U8fBoFBD3W7vMlCjB1m4OGGFEIakzGRYYlGXV5fChSDLtcLFVTxlqlyUJzr1rOdyMyM1upS1ddtiv13+zeXbSVFNRAq19fP6ppzJaiSY5fXa3cXJu+/nYUCBg5uTSov6ms9ZqhFR1myj3by7uTr1teoStizExDcI9KqWrRqBc73sS+6s+NtMIzp9ttztxT0w1mo3tKHOErQNJaVO/56fswocmG/dX4Eoj4Is6fp2FZ1m6lXX73wPBMaSzyYSC+1w7JpqMyO3aldXp75vUpynRUl3kD1jrXzn5xvclwI9Gfq30p1erKtltNefzz5ze8N75bPFCOzf/X5TVqZIOwoGK40O8xWRjKUbOJT0+ttdTQGkfY27YEf16f0aKBEtcLBs7vvJ3XqqEGmnpHehQnFXYK9aZtILHe58aUMm1KSdit6FOxo7sdsps2YM7xS8vbpwUkpJulrt4ur30LUenM8RLXzIup3snNxtOnctZJnl8ia7Jhz8CHyOtCeMu8udX57eXGyu2zbLAXVKB7sSvLh5e8nsKE4yKXMTSr61x7pHG/P28tuJC2pLGcT9fzbaydvL23P2B1+1mvFfe79SnXAgkfx9e/nurSunny+/h1ccLXt99tHhDy16YxYNKSizoeAmyoeQfKMfTxAp/cYPZ50hqY4it5pHyMFcy76+VSP5XmfMe8uFLRvjTi+rBlpWkrdak4EI5t5gUrd+fNPkSL6ptUZ93msg4/6opTX/barjSL6r9YbDuifDYUNrP0Q59FN+yo8p/w+63IXXJnJ8pwAAAABJRU5ErkJggg=="
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Volleyball{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/889/889455.png" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Basketball{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="https://cdn5.vectorstock.com/i/1000x1000/18/79/contour-rackets-to-play-tennis-icon-vector-14291879.jpg" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Tennis{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Academic
                    </h1>
                    <div class="sports-box">
                        <div class="S-event">
                            <img
                                src="data:image/png;base64,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" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Football{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="data:image/png;base64,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"
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Volleyball{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/889/889455.png" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Basketball{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="https://cdn5.vectorstock.com/i/1000x1000/18/79/contour-rackets-to-play-tennis-icon-vector-14291879.jpg" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Tennis{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Social
                    </h1>
                    <div class="sports-box">
                        <div class="S-event">
                            <img
                                src="data:image/png;base64,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" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Football{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="data:image/png;base64,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"
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Volleyball{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/889/889455.png" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Basketball{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                        <div class="S-event">
                            <img
                                src="https://cdn5.vectorstock.com/i/1000x1000/18/79/contour-rackets-to-play-tennis-icon-vector-14291879.jpg" 
                                width="100"
                                height="100" 
                            />
                            <p class="text-small">
                                Tennis{"\n"}
                                {"\n"}
                                {"\n"}
                                {"\n"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default Events