export default async function handler(req, res) {
    const {defectId} = req.query
    var data = [
        {
            "chainage": "5",
            "colorHex": "11E300",
            "defectId": "-NDILaIBv0UU-V_M93Ji",
            "defectName": "LENGTH DEFECTS",
            "endChainage": "15",
            "endingGpsLoc": "",
            "freeText": "",
            "imageUrl": "",
            "laneNumber": "1",
            "le": "Full",
            "nola": "1",
            "positionOfDefect": "0",
            "segmentId": "-NCBk8L7xVsVOLYc5a1b",
            "startChainage": "5",
            "startingGpsLoc": "",
            "subDefectOfDefect": "edge defects",
            "surveyId": "-NCBk8KmmkcvUZK5-7oX",
            "xps": "L",
            "defectNameToShow": "Length defects",
            "base64Image": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAARADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9ePjF/wAFV/8Agn98BfiE/wALPiZ+0dp9vrcenm9kttM0m+1KNI1v77TpFM1nBLEJY7zTb63khL+ZFJbOrqpxnmv+H2P/AATH/wCjmP8AyzNa/wDkOtXx7/wSD/4J2/E7xjP4/wDHH7PP27V7n7Z513/wlurxbvtesalrNx8sd2qjdqGr6jPwOPtGxcRxxomV/wAOTv8AgmP/ANGz/wDl561/8mV83j/9b/rcvqXsPZaW5/ac2yvfl03va3S3U8XF/wCsP1iX1X2XJpbm5+bbW9tN728jn/il/wAFWf8Agjn8cfAl98LfjX8TfD/jDwxqnlf2n4c8U/DPU9QsLvy5Umj823nsHjk2SxxyLuU7WRWGCAaNN/4Lp/sBXPxT1nwnqHxT+y+GLLw/pl3pHi3+w9Vf+0r+ee/S8sfsosvMh+zRW9jL5zErL/aG1QDA+dDxN/wQ1/4Jsa9p0djpfwT1DRZU1C0uGvNM8Xak8kkcNxHLJbEXE8qeVOiNBIQokEczmJ4pQkqaH/Dk7/gmP/0bP/5eetf/ACZXH/xn/wD1C/8AlU5/+Ms/6cf+VA/4fY/8Ex/+jmP/ACzNa/8AkOug+En/AAVg/YB+Ovxa8O/Az4V/Hz+1fFPiy7uLbQNL/wCEW1WD7VLBZ3F7KvmzWqRptt7Wd8uyg+XtBLMqnn/+HJ3/AATH/wCjZ/8Ay89a/wDkyug+En/BJ/8AYB+BXxa8O/HP4V/AP+yvFPhO7uLnQNU/4SnVZ/sss9ncWUreVNdPG+63up0w6sB5m4AMqsOnB/65/Wo/Wvq/s7+9y+05reV9L+pth/8AWT28fb+x5OvLz3t5X0Pomiiivpz3AooooAKKKKACiiigAooooA//2Q==",
            "lrImageUrl": ""
        },
        {
            "chainage": "5",
            "colorHex": "FF0000",
            "defectId": "-NDIMGTaCJSzbAisIbNO",
            "defectName": "LANE LENGTH DEFECTS",
            "endChainage": "10",
            "endingGpsLoc": "",
            "freeText": "",
            "imageUrl": "",
            "laneNumber": "3",
            "le": "1/2",
            "nola": "1",
            "positionOfDefect": "0",
            "segmentId": "-NCBk8L7xVsVOLYc5a1b",
            "startChainage": "5",
            "startingGpsLoc": "",
            "subDefectOfDefect": "carriageway wheel track cracking",
            "surveyId": "-NCBk8KmmkcvUZK5-7oX",
            "xps": "L",
            "defectNameToShow": "Lane length defects",
            "base64Image": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAAyABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9B/8Ag4V/a9/ab/Y1/ZT+H3jf9lb4vXHgrXPEPxgttE1PV7TRdPvpHsG0TWbtoQmoW1xEuZrSBtwTdhCAQGOT/g3q/a9/ab/bK/ZT+IPjf9qn4vXHjXXPD3xgudE0zV7vRdPsZEsF0TRrtYSmn21vE2JrudtxTdhwCSFGPOf+Dqr/AJMu+Ef/AGcBaf8AqM+IqP8Ag1V/5Mu+Ln/ZwF3/AOoz4dry/bVf7b9lf3fZ3t581r/cfef2bgP+IYf2h7Ne2+uez5+vJ7Dm5fTm19T9O6KKK9Q+DPzE/wCDqr/ky74R/wDZwFp/6jPiKj/g1V/5Mu+Ln/ZwF3/6jPh2j/g6q/5Mu+Ef/ZwFp/6jPiKj/g1V/wCTLvi5/wBnAXf/AKjPh2vG/wCah/7hf+3n6V/zZ7/uf/8Adc/TuiiivZPzU/MT/g6q/wCTLvhH/wBnAWn/AKjPiKj/AINVf+TLfi5/2X+7/wDUZ8O0f8HVX/Jl3wj/AOzgLT/1GfEVH/Bqr/yZb8XP+y/3f/qM+Ha8b/mof+4X/t5+lf8ANnv+5/8A91z9O6KKK9k/NTj/AI1/s9fAL9pTwrb+Bf2jPgd4P8f6Jaagl/a6N418M2uq2sN0qSRrcJFdRuiyhJZUDgbgsjjOGOT4Kfs9fAL9mvwrceBf2c/gd4P8AaJd6g9/daN4K8M2ulWs10yRxtcPFaxojSlIokLkbisaDOFGCigDsKKKKAP/2Q==",
            "lrImageUrl": ""
        },
        {
            "chainage": "12",
            "colorHex": "1C090D",
            "defectId": "-NDIM9Ix8kLkluIgu8xS",
            "defectName": "NO DEFECT DEFECTS",
            "endChainage": "35",
            "endingGpsLoc": "",
            "freeText": "",
            "imageUrl": "",
            "laneNumber": "3",
            "le": "Full",
            "nola": "1",
            "positionOfDefect": "0",
            "segmentId": "-NCBk8L7xVsVOLYc5a1b",
            "startChainage": "12",
            "startingGpsLoc": "",
            "subDefectOfDefect": "not defective",
            "surveyId": "-NCBk8KmmkcvUZK5-7oX",
            "xps": "C",
            "defectNameToShow": "No defects",
            "base64Image": "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",
            "lrImageUrl": ""
        },
        {
            "chainage": "25",
            "colorHex": "8B2323",
            "defectId": "-NDILpu8fhfi8uH6ExDl",
            "defectName": "AREA DEFECTS",
            "endChainage": "37",
            "endingGpsLoc": "",
            "freeText": "",
            "imageUrl": "",
            "laneNumber": "2",
            "le": "Full",
            "nola": "1",
            "positionOfDefect": "0",
            "segmentId": "-NCBk8L7xVsVOLYc5a1b",
            "startChainage": "25",
            "startingGpsLoc": "",
            "subDefectOfDefect": "all other defect",
            "surveyId": "-NCBk8KmmkcvUZK5-7oX",
            "xps": "L",
            "defectNameToShow": "Area defects",
            "base64Image": "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",
            "lrImageUrl": ""
        }
    ];

    data = data.filter((e) => e.defectId === defectId)
    let re = {}
    if (data.length === 1) {
        re = data[0]
    }
    res.status(200).send(re)
}
