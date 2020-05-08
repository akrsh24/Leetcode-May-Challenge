/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    const coordLength = coordinates.length;
    const firstPointx = coordinates[0][0], firstPointy = coordinates[0][1];
    const secondPointx = coordinates[1][0], secondPointy = coordinates[1][1];

    const slopeOfLine = (secondPointy - firstPointy) / (secondPointx - firstPointx);

    if (coordLength === 2)
        return true;

    else {
        const colinearPointsInGroupOfThree = (coordLength % 3);
        const numberOfGroupOfThree = (coordLength - colinearPointsInGroupOfThree) / 3;
        for (let i = 0; i < 3 * numberOfGroupOfThree; i += 3) {
            const x1 = coordinates[i][0], y1 = coordinates[i][1];
            const x2 = coordinates[i + 1][0], y2 = coordinates[i + 1][1];
            const x3 = coordinates[i + 2][0], y3 = coordinates[i + 2][1];

            //collinear formula

            //console.log("Check for 3 group->", i);
            if (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) !== 0)
                return false;

        }

        for (let i = 2; i < 3 * numberOfGroupOfThree - 1; i += 3) {
            const x1 = coordinates[i][0], y1 = coordinates[i][1];
            const x2 = coordinates[i + 1][0], y2 = coordinates[i + 1][1];

            //slope formula
            //console.log("Check for 2 group->", i);
            const slope = (y2 - y1) / (x2 - x1);
            if (slope !== slopeOfLine)
                return false;

        }

        if (colinearPointsInGroupOfThree === 1) {
            const secondLastPointx = coordinates[coordLength - 2][0], secondLastPointy = coordinates[coordLength - 2][1];
            const lastPointx = coordinates[coordLength - 1][0], lastPointy = coordinates[coordLength - 1][1];

            //slope formula

            //console.log("Check for rem 1 group->", i);

            const slope = (lastPointy - secondLastPointy) / (lastPointx - secondLastPointx);
            if (slope !== slopeOfLine)
                return false;

        }

        else if (colinearPointsInGroupOfThree === 2) {
            const x1 = coordinates[coordLength - 1][0], y1 = coordinates[coordLength - 1][1];
            const x2 = coordinates[coordLength - 2][0], y2 = coordinates[coordLength - 2][1];
            const x3 = coordinates[coordLength - 3][0], y3 = coordinates[coordLength - 3][1];

            //collinear formula

            //console.log("Check for rem 2 group->", i);

            if (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) !== 0)
                return false;

        }

        return true;

    }
};

// checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]);
// checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
// checkStraightLine([[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]]);
