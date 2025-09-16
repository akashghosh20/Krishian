import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUXFxobFxgVFRUYGBgdGBsYGB0ZHRcYICkgGRolHxcYITEiJSkrLjAuFx8zODMsNygtLisBCgoKDg0OGxAQGyslICYrLS0vLSstLS4rLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEgQAAECBAMEBgcGAwYEBwAAAAECEQADITEEEkEFIlFhEzJxgZGhBkKSscHR8AcUI1Ji4RVygjNDU1Si8URzwtIWFzSTsrPy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EADARAAICAQMDAgUDAwUAAAAAAAABAhEDEiExBBNBIlEUMmGBkVJxoSNTwQVCsfDx/9oADAMBAAIRAxEAPwD2h4HggjU4rB4HgggCweB4IIAsHgeCCEFg8DwQQBbB4HgggC2DwPBBAFsHgeCCANweB4GggDcHgeCCALYPA8EK0A9xHgeFaBoA3EeB4GgaANweB4IIBWweB4IIAtg8DwQQBbB4IIIAtg0DQrQrQWOhGgaFggHQjQQsDQBQjQQsLCHRzBCwQBQkLA0LAFCQQrQQBQkELBAFCQQsEA6EgaFggChRC5o5ghFJ0dZoQmEggC2EI0LA0MmhGhYGgaAKEMEK0EAUcwR00JAKhIIWCAKFghIIVmmgWCB4HhhpCCB4HgDSELCPA8INIrQNA8JAGkWCCB4B0EEDwPAFA0DQPA8AaQaCB4R4A0iwNCPA8AaRYIR4HgDSLBCPA8AaRYIR4IA0iwQkITCtD0iwPDapqRdSfEQ2cZLF5iPbT84TnH3Q9DJDwjxEVtKSLzpftp+cNK2xhx/fyvbT84l58a/3L8j7b9iwgit/jmG/x5ftCCF8Ti/UvyHbfseTp9M9oD/iFHtRL+KYkS/T3Hi8xJ7ZaPgBEfJySfZg6P8ASnyjz1kl7mdssZf2i40XTKPahXwUIlyvtKn+tJlHszj4mKLIPyjueHZ2ECUpUU34afQ+MWsmV7pjs0CftLX/AJZPtq+UdD7R5h/4dHtKjL7kKyOIiHmyPyPUadX2iTtMPLP9Zhtf2hYrTCyvaV84zJnyx6yfaAjk4xIsQf6hE9zJ+pj1o0KvtFxv+WleCz7lQ3/5k4z/AC0r2Jo/6ozytpkWSe4Ewwra03SWf6h8B84fcyfqYu4jSn7TsWLyJPhM9+aEP2pYkB+gkt/X84yv8Vm/l/0ftHQ2tM1SfAiH3Z+7J7hqUfapP/y8r/X84kI+02cbSZPiuMh/Fhqg+fxhmdjwu6lj2fg0TKeTxJlLIlyjcj7R8Q//AKeT7S/dHC/tKnu3QynNnzn3GMGFpFpqx2j94WVQ5kza8SmvjErJm8zH3V7HpMn02xJAJkynNwyw3+qJCPTOef7mX4q+cebS8XOFsR4kn3x0jaGITaYhv5fk0YN9W+Mhqs2L9J6T/wCMJ2suWPb+cdD0tnm0pHsr+cedI2xO1rzBWPgYU7XV6z+0o/CJrq/7o1nw/pPRR6UYn/DlDtCviqG1elGI1VIH9J/7o87O10/Q/eOv4qk8fL5xDh1f91lfEYf0m+melc4eujuR8zDM30tn6LHsp+UYj+JJP+4+cJ9+QbpV4/vE9rqfOV/yHxOP9KNbO9J8QbziOzKPcIhr21OP9/M9tXwMZwYyV+Vb/wA37wff5Q0X7TfGIl02V8zf8h8VH2L9eImG61ntUo/GOVBxU+JihVtaWLJUe1cc/wAbAsgd6iYzfRZH/uK+Lh7F6hAOkO/dv0xRI9IFDQfGHR6SK4P3xzz6TMnsaR6nE+S7ThuIheiAiiO3gfVPtftHaduJHqkd8ZPpcvsafEY/cuHH0IIqxtpH5fOCJ+HyezH34e6M0TM1K/E/OEObV/EwJmr/ADecOJxCh6x0tePoLZ4w5hMMVEO8bDZuDUZbNm4pUQaDm8ZPD4xT1UW7Y0ey8YpxvNxtXyj1ehlGqZF7ne0NglSDMlKUCKmWoVSOReoB7D5xm58hSesnxTHoiFuyh30BDGhcG9274hbSwQyhSUtoRcBhSvP3iHl6WOqjZq46omCp+UeHygKk/lT5/OLfFoYmw7hEAzGukeAjz8mFwZknYx0qeA8VfOOhMTok+Jhz7xoQkdwMHS06o9kN4/VoxKOEzR+r2oUThxV4wCcl6pT4COemT+QdzxI6HBiBopXiIUYpP5j5Q2shn6JLcat4aB38IJWUgkIQybuVaJUo66BJuRDtjpj3TA6+KRCKmp4j2RCGR+GFhDlTUCVWJmAMXrWWexxBKwoUplS1jdJ6qwVZUksH427xeC2VoZznRxHsCOiUfp7wYdGzT03R9EvLny5sqrfmaGMTISkJIlrAUl2LukhSksS36XFB1ofqDQ0KVJ4p+u6OCscfOI6ikXBHaW8yO6Jc3CoSgkFWZKZaiLBpgBDG7jMnTXkHNydLZzTiPEwMk8PL4xGJR+rlUd2n050iVi9noSgnOSoJQpSALCYwSymqXWgWHGrQ1YlFsRKE/p/060hBLT+ny7IYQEXcs4evGYhP/So94hEoRqVC3C7qRf8AmfxTwq2xUSjLGmV+1vjCKljVI+u+O9hbOlzp6EKWQk5idHCEqLO9Orl5d8LtKTKKEqSEodUxBCM2U5CllAKUoh8zM5sIW5ShasuPQzYEnEzJhmh0y0g5Q+8TmuRUAZfPx69NtjSJK5ZlSwlKgXAJZ0kcTwMRvRXGrwfS5MpXNyJAmOCwKrIS6lEuALCt4udvbPmYrDpVNUkLQt6IWghy3VUXAYJLHg+sXj39N7s6Y4k8LdbmPGHTdoPu6eBjQYH0JCklS8SACDlZNi4qXVWj0pe9IlJ9BZRti1c2Cfge2HLp8ie7MI4XJWkZnBygmbLJFlpPgQeMSfSBCTipxTYzCfGp8zF5ifQ3DyW6bErTmcB2S55PErEbGwMyYZq5y1KLEhKgE6CwHxg7E1y0brBcGvNmI6MfX+8EbUbH2Z/iTP8A3D8oIO0/dEfCyPOSoP1n5C3iO/whc3AOB2PpxjgSxr9PahPhaHCa3GmoD9wp5QHOPylVr4hhyPnFvszFOfkH+EUyFgXUL6VFPh3RY4OY6mdT9rd8b4JaWRJG12fiWDEkg8UiJswpY6ghgKBmYgggBiCxfsjM4XGhLbprbeMaLCzQQWo4uACW7o9R/wBSNG2OWncYXh5EwMUqDDrBQUaKSk0IDmt/fFJtXYhRvIUFIJICk1s9DSimFo14woNnowDBIBqmpdXAeUQpDgqOUkKKt09Uih3msSRQiofjHJOElybuEJrg8+nIIN+7wjiRhpkxYQmqi131IHxHOsbXEYXDlQUM5Z3lsmrhJYqsGcWFQq0SJk5YWnoUCUc4zsgErDu3SVUeyl6WjknjT3iiFgp+pmdwPoovM+IUmVLplMxWVSnYgZLg1NKV4w7h5ez5cxO/OnTARRCRLlgi5L100McYTHzxOSFEmWtaXSWLBxXMzk0etIj7SkdACqVUqWr8Sm4xJyhrTPFu0OMnjaZotFXFfk0OPxGGky9zDYdZDgy1HOoBLFyFA2cEsCzg8SK3C+m8zOyMNh0OFMyBdKVEdVtQB3mKLFrUkIUlRBCnCqU/Cw5udaG76xabP2endxBSUBXqAEMTTcNwkuGUqiXapyutFj7jk/SaKX6TzsiVz5xlAAZsssqClEkBCaklQFwLMXbWDtb04xIOeQUqlF8iilVWZ0qqCFC/AggvGZ21OMwynYIEpAShLlIcPug9a9z21iPhcQmXmSustbZwNDopJZlTU6AUuLEwpU/Ad53pNjL9M54xKpQCQFTsr71Q4QKcWAq7VhrB/aDiSkqWlDACz1JLanq89WpFNiMKpGPSSAQqeFA6EGYN5R5EkBOhDGI+zdmmchLJKwd5Q6oWR1QpVkoFXewbUhxQvcayTs2+xvSdeJAK5KAgqYFbEFP57UD087QmNnYbKpeJwaJYsQrIFFKS5LJNUAgVNLEcYx83How4KwoTprjfZpQVYJlIPWCbZjSgYGrWGwcd06Vy8QFKUEv0rKuVPkdIfOmpSWs4NDCpN7X+TaOTw6stP4lsioVJlihJJSugJYl9IkGXs1c1crKOkWpKSgLUkqIICRfikAdkZWbsorX0U6UCFrrOQpElSgDu5kTCOkd2IAdyaxJweyz/ABJCxOkqC8WhbJUrMwWDlYA1vq3PQUsUm61f8EudJvSjVr9CsEipkTEpSEu8xeUBBzBy9uJ7YgyvRjAqk9IUHMZalMZiwl1BzR6VFo2vpOQMNNo/4a6G3VPCPKvu34Cl6sCAAABUGke1g/0tZIOWp7fRHlT/ANR05NHbRotn7CwSJoWZqpa3JCFTEsAUlDsoO5BBLm8SpXo5KWgpE3KHP9klCQCWBKSK1ZOtWEefTkoWoZlgkh0DKqjEk3cEOTwjbbFkFEsFcxky8pCcgQUqCABmtlOXeymoBS5ZgfLzY9HytWetgcZ7aSTsj0Mw8taszzWYjPukEVDZb9/DhGJXi50iSZU3KqYsHpAMoFFWGUVrShjQpxykIOSYRMVMdAU5CUNcpAAyneOXSnCKmZtZM8pGIllBQ5zIopaU7+VJFRnXlzHQJveOeEqvUvPJpkikqg6KqVNWOrMOlE2/mADjKaWfnWO5+0F5lFMyYhyaBRDOaB05Q1tByiEjFnMy2GZdCDlDngH/AA1dtCxrD8xTgMSCFM4GUOTV26iq9haJm5Xb/JxPXDYmTdsTlAEzOq9gkVPHK1aCnKJOJxs1JQcwVmQlVXbeFr6GKZUgpuk2saeWnFw6YlYp1okWAEshuIC11AF6EceyEra2YLJLySk7SW3qewYIqVrrqeYBIPgfrlBC9XuLusjgKcpY91bm/wBcY46JXLiHa1TpRqRIl9UEpYGlWALk11saPzjsSwD1w7a5iWvQ6jsrThGuoz0DcmV2E8mKQ3Em3ZyifLUzk9pdRYWNzemlLxwEZA7kqBdVk3PABwHpWEZKS7u7UoLvRjducCyNO0JwLFE8OzFwNQfj84uMFPI07KaRRYefvEABxzVxFhwHF+PdZ4OfoSO73Pfvjtw52xJGpwOKI08YlrUScqRQ3LWFfMxkZXpDLSvLU1uGi7w+0VPRvrnHoXaplr0juK2eWZADh1PZyq7kcWNTrWEl7NXnQo8Um/MXpfjEnD7QJ1Ba7xYIxQvT67YO3F8D1soFYJaFhpZJzDeZHGrOp+NTFecE5WOjLKfMGBBqb77OOOjxs/vCTfL3w2ESz29kQ+nQ+4Y+dstIKVGTOmMUnKOjY/hgVdXVLBwIjhKjOExaZ+ZwGyyAkAHqhIm0Hb23jdmWkkOe7shlODS4YC8ZPo48ldzwYefsxBG9Kn9RAJ/BFkgVVneo0HGIqtkyh/c4k0pvSA1NA5btje4rDCwDjj2Uv3REl4RNUn/SffE/CoTkr4M6ZSPvGXoVlsQFAqKcqTnfNuqdtWIuBETE4ieuX0bIRKB9VIq9bKfNfWNiNmZpmYB9570FXtqYi47ZuVikOfdEfClPI62MqmWvMAAoKZkpl5EAc9wU77R3JwackxExK1jJmUpc3MCeklnJRIfq6UoeMWycAty1KhzTyiROwmZJeiWY+0kn3ecZvpqQoyZC2bPl4jo86Uy54UOhJUWmAFNF/r3aOasA71in2LKWnaGHQohPRzEdIAgS94qAYtepevGLjDbOzTM5NEA5bUISoj65xLyCchpuUTiMqJqh1gLJWRroFeMQ8Mk+eCtWpbm19IklUhYCfVVmJeicinNO6POcg+7sHUMo3gGHbVi1HtqIeR95QkS86ws0KSo5bF3qzBIUe6kVS8OlyRLSoqUhD5cwSEgAS0D1a+sWKszppf0MfXvFcVG7+pzPolJKbfH03F2PsxSVISgJViDvpWpJMuTLJ/tH9eYEqelAS1SzT9r7TlSCiSyjLBLsxKldY5ySHUScx4mmjQ6navQp6JJKiTUkkpelBWiRyuXPCIeIGHUjoygpUpayMv4gKiEGpO8muj6mPMiqequTvvSqjyM/xFGIm7gUk0G+AO00JpWIW0JSCsFjkGtjKykueyhfmOcWC8LllFBUkZSyZiC4JuxIq5rQ698QkyJm8QN4rWVXZTn5N4CIt5JOLW3gU1tuQDJlzCUzWDkkFgUGvixo47WvDYkTpUzJMQS5PRKCgrMLhKiRvjg9Sx1Bi7l4Bga5QfUPVOpY6WhrGYNFTkJANUkkswoUkesPp7GY4ZrZ8f8AdyFJSWmX2IQzJslOUWclhYuk9aWbAgkDSJuIw2aTLOomTAyikAuJagWFFMSbEGsRsHiczAlJWQSlVisciKPxSe3WJqZJ6IoKLLCg4AqxBZ900A5eMQ8MosheUyrOFHrZQdQc/wD2H3mCLlGyHAJPiD3a8IIPh5k0jNLVNLsrKLh1ku/dQ0qwvSETNJCiopysBQEXuHWL1uOHOO5WECc4WDQO+YioLZdwv7iBzt0uTLuXpkJyqyJL1cAOeAejZRzh2hUxvJQMGS4AUpYQCOaRTk/LlHeVnKls/wCVDE6DeU3d21vC4iQgsEywos5BS7XUGq7sLcq3jtSxlKmAKtXuLuSMupiL9go7koCkjdWohuOUMGYg0dxYGlWtE+SnKQoE+sddXoMwZLP+a4iHhZxKSXKi7Kyl2DhNVJLC1idSezibPCCU5gDQuCQ9mIyubPRzejRFyvYpUlZPwuFlS7CgGri4JuaG1K1ifKmg1AA7GFbNRx5vSKVKsqDvEg0LEhjx/EqxbgLw/hsSlKKB6nKGcHjvNw90dMeqmnuS9zSYVXL6+fKJyMRpbw07IzSccwBOUUoA6joHpa3b4vElC1MDUsBcs78tbecd8Opsmi/E8PD6MT9E/RillrNASX4JYU7eFIkInpS9U1sBXzjdZmFWWpxHKHEzy0UwxYqRTg/LQQ+nEvQOTGqyE0WPSH8r+XnBm/SIhHEgXYGzXhZeMcszD3QtZRZySoAAkU7PdDl0jOdLB4qBjK0Lw6nFcYepATxISbUHOGpsojdKd00fS41jhGKJrpCrxpFPnA9x2MrlKfKAQli1g70+MRcThCWBP1aJs3F0APEEhzVqty08IYnbYCEKXkDhglOqlqLJS/M35AnSM6TdlDOKZZ6FaSpKUjOyik1IKEZhegcizEAvaG8ahIUlEsNNUmpPWQniSKEkW4d4h6Ws4eU6iFrUSecyYqp/pDjuYax3s9GUFSy61VWr4dgjFwV0vuaa9rZUr9HpjHIUHhnl2tV3cWa7atEaZg5xGVaUNVghTN1Q5cUoBbhGn+8pHHyhifNRnCmOUA9uYt5MPKLeNeCbvkpsPshTDMkAB2ox11c+ETTJIdIAcVJPOjsGETU4kEUhUKLvR7Qu3W6HGS4KXB4dQmKlrqGzJYXehD/VosVYMA8uB/eJOMW6ApIGZNRTxELJxiVpCmDGKUUyWqKHG+i8tRJQwJqU6E/mBHUVW4b4xU4ydPwmUTEiYl7qIlngxmVSqhuw+MbXOjn4j5QpnoKSkkl2uLV84O2hqV8nn0z7QpQJHQGn65Z8wWI7II2C8LKestJ/olwQaRWjznDpWE5nUCkh1EBSS7hgouDc+feTpm8RnQSS3WWaAmrJADahwWAqHjjGYo5WloXlGho1QKJSweHBO6KWkLUrMMzEBKsoJq76nu4x5H1Mx8YeYnIQGAO8miAWU5610tlLEcaEQ6ubJCgCQ4ykBCCVhSQbLckgk3IJI5gRCRmm5koSZqVKfPNKQKX/AJXzVq5hqfIlJWpYZJQwJSk5HsGD10qHuTo8SlvvyVdLYfn4ZLHKSOstlU3S2QEJFCTzsXszOSkLWR1EBnSEpAAcEuaAHxPKkGBlLzMEvXKta0k5QptFE8tDElM05DmnulOUJQAQLl21ygNbjyhNtAle5xiHSMq1JSkFyVJCi7HhqMzEUiVs1RWrNmK0inEZsvbWtQOY7YgDacqWQpCM6lODndTEk7oFqDtd4CidukkAKTmd2KbpZixJo3x4S4OvYm0mWhn9GzrA4sQ4oGIJsaEdjQ0nadikKWvXMHJNrGnC8UXRpBTVSizZUgF1GzNqKU4xZJw6xLUEp6MVICnznR+zSvOLXpXItTfCJyMZMfeJQxZQCiTY0Z25X1h/DTlKcAF6s73Fw/Gtv9oqemRLIURmUkHMFD1quK3A+MPDEKnLJDy0lJY1y1NWVoKmg4c40WV19P4BItZM1IDrWSr8oFOYJ4w8nFlQZAYUzEkanXyirk9EjN0pK1OnKzhxqK2oxe9BDUvFLmHIhPM5Us1esQNPgY2jmfP/AIHGxf8AThCS7KJYO7hN7eELLxBWqpygs5ysDUPYd8VcjBZE5pozFVgFJCWBc2qDTl8up22ieqS+p05Bm0e/IGCPUanUd/r4Lar5vwXkyeJZKXfsvpQjuhJGJKjWo8B2UtFJhJiixUksWYl2YeRBZu6H1bSKCZbaZQHfie81vG3fSelbsX1fBoJmMSHANje3x1hJc8gFVu13107ozuGxZJfge1z2RYzNoAKJKlAgmgoxpT366RpPLo9K5CLT3ZLxeJLjUlmpXk0d4aXLXvqmUkZwabpVRKpgL7zdQUAcFutFPKnqopLla1FEri56y/6QafqUngYlKKWTIknNLQquU9dQ4H8otzJJ1oZMnbgi8at2yUZpWoTCGFpaeCePaePMxPkzN19YppGKV0iXDs1GrTSlzDuGxRdmJro4+tPKNEqxpkuVyJ+LXXzNvhDkhiC/nEFUxRLEMXbt5Ofqscy5+kUt4ivclTaHhDqJrtaImJxaUJBmKSlJs6hpej98RU45AbfSHYjeFXtDW6AtSo6MBry5xXImiVOMsndVUOOqrVPl7odOIo5sG17ohbXXmDEEKYFB7LDzIvGfq1GqacfqWRWdHvWG/vX03dEHZu0MyQaOaEHiNGhxcwEkk/XdFX7mVkwfzeYgis3uEEH3FZkcQiUGTNmEmjplVs9A/F+2mlYioXLWMiZILEJ6QodnIq4Dg0vdiRyjvE7cYAJclgHcvu8+8248Y7w+DmqSpa5+VIUUkBQUd4O9KFPfViBHkxTSt7FcvYfmUSjpV7rqzIAUDcWOlGckPS9aNYsSZKkKRJJzAGqsyXJNAAeDa634MGWlJJE1KkhnUpOXM/WASyrFqvWIWIx5CswGVnYgWBoCCLCGoXwQ5eC8QufOCypWUFIIBSkC6nSajIdyzOYhSVIkLC1TQpQIICRukg3fUUH7xCwk5c50pXqHJIGY2G67qNTxue+52LIEkKMzIVjU2SDR0jV3IP8ANajxMloVP8LkpW6K8TCFqWhBSTwBspzu0oC9AKNHRwaxWdM6NTkKTkJIAtUUPjo9Yd2rtsrTlSHZTq3rv+kUoXNPzGKeXiFzVJQjeUdL8z4MT3RUYyauqIaV7bmj/iwQAJNqvVW89GAtxNgd48Y5CJszOZqjKSnQjrEFj6wautqQ3JEmSnqKE1QDO4LA1UyqAFiKCz2ivx+0AVUKkpewZgOA5dsQo29l92U5bbliUSQxOZSgsuSps1t00Fu65jnFbUSxEtFTmJOtS5Yjk/C8VOFlzMRNEsKLvVVCBapq7cr0oDFopUuQVAJcuQlWapFRawH1zhygk9937C3r6HEvZ85dSQmrsssWpVwK8ruxi16ZEg5ULBcA5g9a2rUahi/xjOK2opyFKcEsdbPoba+MRpuKUVZS1SA5dqtUs9r0DxTxTyOnwJOvlLfGbUXmqSWDBnIsxpwqfExb7IVKlspZc5S6HA7RS9KNzimwOyiWmKLsWAFRwCril+du60w4YqzlkgNVi5UlWUZvVZQTWhchriFJKX9ODNIReq2NYzapCsoOZTqYBW6MoKqpatRZ+MZw7ZmkkrmFJAASEkJDuC9LktfnHHpNizLnqUFZlryqem6QkJJpqSIzKiVEkuTHfixRgvSjZ0jR7O21Nl5lCZmUdHqwr5243jTbD2orGLTK3UzVKo7inHN1WvTkI88w2VRymnDtiVJnKlkUBINAuo7CNR841ajJ+rn3JeL02j0zbU8y5ypCKLDygxfopaSQa/4kw5lHgFHjSTh56koR0aGSAx4Gn6tTfW/bGe2VOkhGYqlpKriZMSVJr+piavx7TeLyVgkrljLOlgaATC2tXBPlxjPqulzZ2tNaV9TnjkUW1uPbLVMM4FKCoAh9QBR6jkYkzFFEwhYyOSeNC/jFbhNqqlTMkojNl3nUAgtcinf3w5jNpJKgcTMSKBsisxFTyHiXalKuOrsf0dF7/wACvcmjEtXO9P5a8RFTtTbuV0ChYpzuGTepF73fnDG09oIlj8NS2YVX0r9rJASbu1AfOKbbMwy8xUUlSwFkUd1jMCQLUL8KxyxUsezkn+x0Y4qTshz5qi4mrPLeNCDduF/EcIakTwm0wiru93ioBUveJf4CsPSlFIYh6vwjTU4mlJm42PtwkjpFFSeNy5p9dvONAuZmDd47Y87UnIErT1VBx2cORjRbI2s6WqSNUJBLGtSSKxpCUcqtbMwy45QZKk4rJNINAogF9FceTxbY3EiUCSSRRiAznlFDjk50lkzH13JZP/2CIMzEOck2YtpYzAFKXsSzAlyWS1aAl+ZkpLlBCOp8FpN2/NehmJ5JCWHZmBPjCRlZ2Kl5jf8A3rBGOle502vYjbDwq5hB3sgqa8y1qgPrSNJjspATnUE2CsySlTMTlKnPCpPHgBELYWzpiHSAZYJSpeZQSogZiQEn1CAXJ0TU6RztVKZiCpLsCESwCRujNvZdA4bjQ1oI48nqyGPb2KvGLCLggF2JcFvjw0iEpWZLjTmxPdXlEidh1lgfVFiXbWnv7TziPI2XOUSJUta+LJJSNHJsOFY6YxSW5EcRpdjY3opSUJqrrhkgbxFd4khVOIFhEDaGLVmOcFzl3VkF7VzJYPrGh2X6O5ZR6RW+QTmTQJYCgJrqXLVc8Iqtq4RKnQh11zOxKgTd16jlHJBwlkdG8+nko2zNTcRU0Y9rGunjxi49GMCVr6R2SHdZDAHl+ZTaWrxjiX6PzFGoPYmp/aL6Th0S0CWrNnIIITXLugDNSgBBdiantfoyuo6Y8smGJPkqNrY0FkuohAyg0JDF7g1DxWIdRAJKQTV31vWNVJ2XJzA5VEkauS9nble8WEzZaEhKkDMQAa0IY3btGt4hNY0lRUemu3ZW4SbKlSsgSwd86mKiwu4saDdHdFLidqKmEgrCgpxVRDE9lH/aNRjkrWSFEFBSzZQnKCGUkNYfIQ3h9kSUDMsJcGgo48fKhtE48TXqktwliT2TMiZalscxS1iXAI074l4DCEqJLluCSSeQH7axeYuX0jbgSjQOXLdtWfWJOB2UjrzEhvVYi/AP4N48+3HDbcycEtkMSZxlSJyk5lKSRdwylAiwrwFedKV5+9TES5gnDOlctVCyFNkdFxXRxqDQUh2bgZZdgMt6VDtqOXH5xB2rhR0ZEtQBF3BCVDmWaOR9O4u/qb46TMXtAqVMILkig49kLLIcIJGUGqkh3fWrP5QLQOkFU30qI6VhgVB1ZQdS5CfZBPgDHbHgzlyxmakZqV4Re+keBKES1qAeZLSq4vlSTTTrREwsiUmYTmzIGoBD/pAJcB6OatHe29pqmFRcDMACKUSk5gkC4q3hGUtTmq4RtCSjjafLJ/o6Vfd5hpVTUDKLAEWFswHgY7RhlqcKQoDSpYF2JD20tF36N4IypIQq5LkghmLG/rAcL0tFmZQc1SogAnK4ADO5cBg31SGsVtyMXTSRX7AkLlTQpailKgQooCSpm/UkhqxxisO0/MghSArdJGhJL5TTM3LsibMVLVL3ZtM1wC9BVP13QYKXJmpSEKUSCEkEh1GgenquX1sXtFSbku2+KI0q7K/b+IWqXQKzBQJUQGYPQB6MSDbTtjN7fxeebMUJeTMXCcxOV+Z/aNljZKVZ5aitrUDMf1G4qOEeeYzZ86UVCYGIIBF+tma38ivCMoYI49kbatqHZAPRqOYBlWJD1AAIFzrrHTBRATR2oCSBYFieNTHapLskp3sooCQd5lCmoNKcYMFg1rLISTxA7hWvONHsrJTTLpaEjCSQ+8VKfgEk0Puh/wBGJbpWpzldras/uI8YocVizVL14cGoAI3WxcEnDoTLWHLZlK6QZQogBhTkBTg8GHC4+fqVlyKTHU4QlqmzEOx7ecZ/Gky52JdQ3pYq4d1AdWoAO6R2OKvGrwjFRSTmB6rGgA4qFibte8Zv0xwBmI6aWAVI3VhILkBzY/le/AnhGmTAnGyIZFGRjps6pZRPbCQ1tqX0c5ctNkkDtoK14374IyUbVjcjZ7ekTSPwpbAgOpwFBi7VNB9dtfsWWlSsk7ORQISkgVq5IA0bzi62tj8sugUQWACnNwQbiIPourKsmYFGjIqS1WKQNTz5GHKCrYE9zRyJaClkJSijEhVXtVmNnt8IlKmy5QzFZYnKGQSAwDgOCeNeUR5mICGCS9bNbm8NS8WgOpipeUEOzB2ZtBY+EYThFLk1WWhMVMXNJcFMt6NRShYdg5DjDkvDBKRTIgPX1ib0a5oadnCFmbTd1BAAGvLVhpUQxPnzVC70oaOw4RM4wnHTEnuJu5E+WoIlkhIFKHKyuQ3qxS7LmKUtZUXL1rm4/VIkT8LMXUzA1mAJ1AZ+LRUha0FSUqUCBQ005axrijVjnPUkXOEKyokpUntTU98PmdkSXF6FzVmIvwqKNWKnApmzAXnE5tMpSQ1aOeV9Yk/wgq1UouNWpr5Vh5YrRT4QoSado5Vi2Lgp4EAuTwcZX+jaGZUwzDmUXAdgaPprpTzMScdsUgpSkMM7ubjQP7oX+A5VByCMyhVqM9TypEw6mEt0xOLIkqQCAtad6j74ysxbsFB5xdrny1FJTRKRUuQXylqfVKdsafgmScuVyKdzkt3OxHhFQnMxdJaiuTV1vWl/OOKeVyVQlwyG3HwXSFJcfiAkAigABtSg7DaOQZK8ySVLegCkpyl7AuPq8VOyFdIteaiUgkjUt8YsZWzxnMsqLKWCBegdx2uCIUurlC034GrlujKbQ9F0bxlrJzVSkgAAFuNTdu4xXYzAmXLVckKDPU5GTqOavKNzPlpK2SBwdrHpGDcrnwhjE4ZITNA3suStXdQDj/WT3eGmPrX5E4mFXhVlBUEqBADhjUlQFOTPTlzi59Gthyh+LiTMCkkKShKHdmqp7nMQMvIveLbFy8pIzFQTSvN2Hl5wuCxGQ5kpykChvYWYljHZHPe5HBPw2OA3iuckhRLolywL6gqu2hp5NKm4+Qrry5izMJLlEkEs9b6D4xExO0lGq2zDeACQHJHlQmlo5RjlBYCHBcEBLNzFvIRq+oS4E0vJzInyAlSESJiaFyFJDuG4VuLR1sad0ZCghQZLAlRy0fQvQO+kMStrKFWLuXsHoeAF3hV7VmLQyjoAOQY1o1XMRLKtLsLrgtEYpQqpJUtaUqAUSoZszOA27Tn+5jsChaElbZiVPxKmUgBxoCuK7+IKyuHC2YFwABoG1s70YkX0aw2IZNVZimZmFDUipUX0ZPujyciySp2awyKxzamzEpmBZSl0KEyzHKEpCUhuYHhHWyMB0QVOStISsgK5DlwdRQW5HSGpu1MylqN1gJFbAUFB2d8InGOkocZRvnVi4GvdfiYF3XDS/pY3kinsO7O2YmXMCxLQoqVulQBy5t4gPSla9jRdYuQFKEtSxlNbpcGlKJcCj0MUKdqFIBVZxoHFm/01HbErG7RUqag2zF0jRgSE7xo5JI7jxEa/EdQvT4piUYNWT8QsSsvRkMSQASWZn4XERsRPU7pYuUuSVUBSX15n4RE2ltNOVJDlYUXzO9yLFgerXsaG0YkqABsVJJAdwxABPifEQl1OfSrCUI3sdnYHS/iESnVWrPwFw9oIgYjGKCiA7AsK6CnGCIvO97HcfYsZw/ERzCn9lJ+MXqJSU0SkAMLADSEgj2/BJV4UfhpOpWXPGhvDezw/TPxT74II4+u+T7oUfmJEqWMq6C3D+SOFlpkpqdfyCYWCM8Hn9yZ+CJjFlzU3/wClMM4s/idqa896CCOnHyOBZ4HQ65F17EribhlHIgvXLfwggjLrfll+3+DWHgWSo9MoOW4f1Jiokmn9av8A4Kggjxun4/Box+ed3+g/CFxQ3O+VBBAvH7/5Ifkgyf7VHOWX59SJ2DpMp+eZ7lwQRpl8/sRE6wN18jTuy/M+MQpxrO/p98mCCJx/O/sVPhDS0ghTj6DfMw/KH46hoMrDhSXBBHWvlf7GcRzGJDpp6o96fmfGKxXrHWvvEEEX0/yIjJyM4UuUvXe+LQ7KNT/MfhCwR1S4JG5/V7z74g+se73CCCMiFwdzNf8AmH3GHMAHE96tKo/YswQQPgqPI5tCoSTWiL/yyod25/atoEhhoHDnzJPfBBGa+Zfc28MZwodMl6//AJmQ7sr+2X/yx8PkPCCCJnxL9mUhzHyx0i6C50gggjFFn//Z",
      title: "Fair Price for Farmers",
      subtitle: "Fresh Food for All",
      description: "Connecting farmers directly with retailers through technology-driven auctions — ensuring transparency and fair pricing."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542801637-3c0a1120d8d6?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Smart Technology",
      subtitle: "AI-Powered Solutions",
      description: "Our platform uses advanced technology to match farmers with buyers, optimizing the agricultural supply chain."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Sustainable Agriculture",
      subtitle: "Building the Future",
      description: "Join us in creating a more sustainable and profitable agricultural ecosystem for Bangladesh."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
      title: "Direct Connection",
      subtitle: "Farm to Market",
      description: "Eliminate middlemen and get fresh produce directly from farmers to your table."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </AnimatePresence>
        
        {/* Softer brand overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-krishian-dark/40 via-krishian-dark/30 to-krishian-green/25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Badge */}
              <motion.div 
                className="hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Badge removed as requested */}
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block">{slides[currentSlide].title}</span>
                <span className="block text-krishian-green">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto">
                  <span className="relative z-10">Join as Farmer</span>
                </button>
                <button className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group text-white border-white hover:bg-white hover:text-krishian-green w-full sm:w-auto">
                  <span className="relative z-10">Join as Buyer</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right panel removed as requested */}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="p-3 rounded-full bg-krishian-green text-white hover:bg-krishian-green/80 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-krishian-green text-white hover:bg-krishian-green/80 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-krishian-green"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default ImageSlider;
