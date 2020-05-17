import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = (props) => {
    return (

        <div style={{
            height: '100px', backgroundColor: '#5d67b0', display: 'flex', alignItems: 'center',
            paddingTop: '30px', flexDirection: 'column'
        }}>
            <div style={{ flexDirection: 'row' }}>
                <a href="https://www.facebook.com/facebook">
                    <img style={{ borderRadius: '20px', marginRight: '30px', marginLeft: '10px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAA1UlEQVR4AWOwDp9LUzTELRi1wDdtaf+8w9sPXDtx7h4Q7Tt2c92OS9SxwCZibtesg0+fv3756i0aoo4FkxcdgxhHEwtiite8ePmGhhas3HIB2cRL1x5t3HV5xebzEEQFC67efAI3/cDxW7aR86icip6/QIRP9+xD1E+myOHTPv3AqAVA1DJ1/76jN+EI2YKLVx8hS+0+cgMY5yRbMHfVKbBxhNGFqw+B6mloweY9V2hrAbAIIceCugl7gE6DI2QTT124jyyVXrNxEKaiUQtGLRi1YNQCAMs01I34bbYCAAAAAElFTkSuQmCC"
                    />
                </a>
                <a href="https://www.instagram.com/instagram/">
                    <img style={{ borderRadius: '20px', marginRight: '25px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKS0lEQVR4AZ2UA5RkS7ZA94mIq8ys6mrb7v7PGNu2bdu2bdvssZ9trme03V1VWZWZFxFxfv5a41n6s8/al2EJ/Ccve8P566a78YSF6+Ys745PLW2bbA42LSQQbFQVNWJjUKIniRZRkOiNiSImqiRirdZ+YLNkl4HbxvdOTnSS7CbgGv4N+ehTLuFvjK+IW6/faT/nPfeAlEG3ouUcje9jYsAhmCgkUTExIgquAadgQ8QEcDFim4ioINFgsbRahlgGMPGizfdY9Lx/boh892XXAXCl7HzktVeNbUvzhCJTUtNgQwQFh5JKQNQgPpLEgFOQCDYG0iCYAAaP/duIeMBHiIpEwUQIA5jqKusfMu/RwDYA5yf7zH90cuyN781/PtI2jJg+Ogg4DSQGRJXqkKc3WSJ1iYlg1cw0wkbFhIBvFIvBxohDEAxZO6G9IEfEEGsQY7GFkAw8+3974OcP/uwxJwOXyWl/uCn/9Zf3f/32K6onLVlt0SZgRUmc4eitk8TxktX/M8qCFW06bcElCUbMTMUOj0TFqMEOVQ/BN9TdQG97j0PXjlNkKWOrRmh8RFWwScLE7QNGThz95aanLHqm23fN3gf0dvQetXA0IeuVGCAxhv0X72PtsW0e99W7svm+K/hvuO203Zz72gvoXrmPuWvm4xUolblzDH7X4CGDm/v3czecOXVHM9C8VUSSKpJnjn0X7+Buj1rGc37yYAAgcPC6w/T2l2it4BUNEdUIgBGLNYKkik0c2dI28zbOZc19lrHmisfxu8f9il0/3c2c1YsI2oATTO2d3xmOcWHCLO/EmrSJpAambhxn6yljw8ofBMBl37mCC999KdWeAdIEbIyYqFgEiFgiZiaY0TrLtJ+goMOdv/FQNjxzCw/6yUP55ak/oHfJEVorRolRQRWO9DuOXjdr2QTnA84Gku44937ZKYBw3U+v4cdP/wlLs7nMX9TG/q1Ca3ABpO8BJckcKgbjoTrSZ+2jTqTf7/OHZ30Vlz+fNU/cxJZXHsuFT/kTrilQI2hUqJrcdZw2sazIBOrD0yxb3+aYJ20C4OJPnMuqZJQFK1uEqiRxFlMr5a79VLEkT9uICr2mpDAZTTQseuQW7vTzRwIgD6y47IU/Hzbgzax98mZufsNF6KEedl5OJGLKsnCZjbVvarJUaCammbd+HohhfPshwnVHmTs/w1Q9cmvx3S6DQ/tYfq8trHzBnRk5dhFGDUev2c/Or1zIntPOJx5dxN9ouZSJyUl6uyZoLx+jWJHT232IRHMQkEHpXBJrmTlMiORNn86oAFDvmyQru2QjYzgnMDVNPHSAO33pCax8/j35Z0a2LGDlE47llq8ew1XP+wbnn/ppGG3TO2M3Hdei2tWdaUA6x9GnxEpFULBk0RUmaDQlmUSiluS5AEAIZFRktsGqoXdwByd+7okzlQcN3Pbh3zLx6+sRNcx+2DGsfsP9WffcO2Gk4prnfolRVtGZPUZvfAppIgBpKlgaTPQYFYxRnKNBhuYEIn0y6wGQGEkZvict/I7DrHjAZla++AEAXPGgD3DkjxdTsAgQDp5/PhNnXMdJf3w1a55zTw7/+EqqP+1EbENCjcQAgBWPxWOQmXuiDSbVmlRKclvTTnokpgRAYiA3FWk6IKkPsfRxJwBw2yd/SvePp7FwzQY6a0fprB5l6bL1HP3TWWz/2O8BWPKYU/B0MRpQPBoDAKIRS42RCoOCCqZIBhRuQD40G5raGgBBaaU9cp2imG/pnLwGgMGZFzO7NYrJexgzjWOAcQ2jtOmddiUA7TsuJ0lybF1hqCAoAFbAILgQMTSoqXFJUmKykiz12KJPkg0AcK4mb0+RFQWmPQAbAXC2gqzEpCUIIA3ESGoHWAYAiAacGb7TwhEQUQCiRoSAAVwMmOjFZEmlrbSkyIe2+qRZBYDYSNoevo9WuGYf1XXXATB6r+PR8ZvJWgFXeGyrweUVMewY/tsKQP+i25CqiysEQwPmbyPQYKhBAkbBKZhWVtFKB2T50GKKNK0BkBTSTp+kKMnnw9QffwnAwpc+i/aT701z8R/h4PVDb6Z/7WmM3e8uLHndEwA4+tMzyQC1FZaAEQHAEf/6HlCJKKjLskpdMY0rFNupsGkJgE2EZNSTtAZkmxZRXX4a4z/6NrOf8HRWfPuLTNzlJMozLiB6YezOz2H+K54NwK7PbyP8+RyKNZvwZYUxATEAEBUEjxARiagEXDLTgAFpITDaYG2Xv41AMlLjWh4c5BsWM/WZN2ELx+jDn8zcF78Ihv4zB765jalXfIjOyqWEVDF1RG2DJgaAWFUIAVGPiGBiFDcccrGFx+UR02mwOgmAzJ6NG1Nc0UddgnRaJK0l9D/xcspzfkv7QU8lXb0OwVLefBPj3/0p1a/OZmTLWnxeoN0S1JAUgls0C4A4MY3BAQGDRQji0lk+Gh1giwQ3p4XWB1AgW7iWZPkCzMHtyLx10NRI0cHO20q98zy6H/oLks9Fa0PYNwlmhNadNxBLh+kNkJEO5d49ZGtX0Fq7kAaIu46QpCmqEQmKyRNvJPdl0VayvCFZ1Eamb2Fw2S8xQPG41+D9Lky5AzOimKLBtAPpptWkJ2wkWTmbdPkYxYnrybYsQ/IKSRvIa8LeG6m6tzL/DU8BGJ6OZw0bvp1kLEeiMhNOS2dmtyuJ+3GZhdyQaoG/4MvoSY9g5PhHYF7xU8JZn0F7ByAGCAGpA6YUtInERpCBQB/ilCP2UqgK7JIlLHv/25j7hHvRAAc+8UtyCsSB8QExlqTtKhfNYMJkBjsimBTMnA1w8Bp6215K61GfpX38Y4j/5+GboXeI2FSY4JGgRB/RoBANUQVCgpJgZi8gXb8BEYjAbY9/J3rh1aRrjiNUHoxDiUQ1U7L3L194ZHbVth+mWmbMakPqsNYQjt4AS48hvdNrSRbfAeH/hwLTZ1/A/jd/gfqC20g3HUPVd0Sf4AcJTXRh7DEnPEV2XXNOkl79na+OHLny6TpvBSYJqLOYNIPpXcRQI3M3Q3sRalsIDhOE6APa+KEKZYAKfKnEbo0emqJ/2z4GF92OjbOIi9fgJxJ8PwEpmN4xgTlu/e9XvOCBz5D9X7ySsOHCjbMObLsycXmunTHUKeIcuASLEMtx1E+hIYKfkVh7pFRi3xMHDaHXQFfxk4HQBa1nEdwCwnRCM2Hw/QzftAlHIoPJmlXvecEdgYscwxd7yYk3Du42/Zjk6AW/NXlAkwKxBdFCNALFUmQmgBARHyB4qCK2CpiywfRqdNpjpiN+WglHFR0XmiqimUOqiJ0c0J/wdJ5x78cfvvm6iwDsM1fdhf7RQ/SuaN3cvv/yHzrbbCLL1pgsw1mBNAFrcFYxBowoGMVqRPCICUio/2oDTY0MamK/JDQRug1EhzYpfZ9dyF23PNT3B6cPZShy6SM/xr+z9eNz15h49BjaYwu08R2QZUI6V4lNDF5M8GgIaipvY+2T0NRo6SX2gml6lQ3TTWbLfNztnTw0befvqa+fODDIxq4Cruff+F/YMSYOvVvlzAAAAABJRU5ErkJggg=="
                    />
                </a>
                <a href="https://www.youtube.com/results?search_query=youtube">
                    <img style={{ borderRadius: '20px', marginRight: '15px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADm0lEQVR4AaWWhW5sxxJFVx3Pk/Exh5k5HxAGQZg54jCDKN8SQZhBFLEUZmZm5ph0PbViuVQi3/BS6/Tu6tq7h+fEJ7tsSgQSoUKAAUQIoUaEEiECEAghRKC2wSCsshoASMRQDlCB0CCspQIIgCJI6NqIrpQZkESiXO2DoZrKSe0kgqIKZkmUrtnpBCVorwplJ9ShLFVOLdH+KNFLKGENlSzdQjCoUypr6A3TBIQEa2B5AO0tpM/rrRa9pI0mg7VhQKjYl5pBScsFipHQAaR9htYSe1OAwTUSUxJStD2VVNoikrKjpkhZTKLfsqiQih0JQFlIiPIGCGHVoScRCJFeYhCB2o19BWOkNBXJaIedpk47e7TN9jE7GzOrYwZYFUxM0DAeuzAPuLCwKpyfX3nrjaXrr1157RWKAuOd7f9v9JeMGLbc+h833x1T0/x2XFr8+qQjV957J8QwQGNIwzT7zZw+8RQmp/xdrBqnTjzNNNEkRR3E/ryjjHbbiz/AaPe9BO0BI1VojH/9W+X3smZHCECkv2ipikbMzfETfHPN1SvvvcvPsvq5SFSyM4c0SiWqTE37E8zfc8dnRx329TVXb3jvHX+CmJ7JJLEy1cFWJglMTPhTJDkez999x6dHHf712rNxPcOgmGgdw5CQmpBgyk8jmqi5Ybzh/ffGX33JxugHg4YwMiFAQCEXF2Nqio2RBvqnbbf/60WXTe1/IKBSNC4vpRWoQjBKBaKqkIsLw+QkG2P493/+cu6Fs0cdUy8j61l7fClFiDgSqHYDGH/77fC3v7Mx/nfvff3kfpLxN98IaOfHoKZopKorH37w01/USX+JlY8+VJSsWOzvASIpiw8+yB9g4cEHkopGyKQ/pslYlW9vvmHpuWf9XSy/8Px3N92QomgdQzyxyX8AEQjAYGKY2nff1U/LxF//GpOTMTU98Zc/AzE7F8MAAOMfviczf/jB5eXVkd99u+HddxcffsjxOOh3IAKMx/7/b1hTINAEVBtNN/wkAa7rHBRVSWiNkpKUpisI0pUaIG2B7ixQhmpLMEuE2kH0d9L1zqyeNDOEFBOprZAQrGeQBpJGGp3YoYAIokhP/albd1Oj3VYwpFAyrBlJlBD7Qxwl7FCtYXYW2vE1l8UByHYW1WVqIiS1R5mRqosKXe9BJgmpgjIoBHanYkQ/ZehamTsLJNvYh1UrFAIYDGjvhUk1SV0QNATtY+hdtFX19BW1BPojd0p5ENc3bJAAAAAASUVORK5CYII="
                    />
                </a>
            </div>
            <a href="www.google.com">
                <b style={{color:'black'}}>
                    ©2020 alexadev.com
            </b>
            </a>
        </div>

    )
}

export default Footer;