//Commentaries
import Stump from '../Commentaries/stump.json';
import JCDietrich from '../Commentaries/dietrich.json';
import Loehe from '../Commentaries/loehe.json';

export class ExplanationHandler {

    constructor(partID, sectionID) {
        if (sectionID == 'heading') {
            const { heading: { [partID]: stumpExplanation } } = Stump;
            const { heading: { [partID]: dietrichExplanation } } = JCDietrich;
            const { heading: { [partID]: loeheExplanation } } = Loehe;
            this.explanations = [];

            if (stumpExplanation != undefined) this.explanations.push({
                display: Stump.display,
                content: stumpExplanation
            });

            if (dietrichExplanation != undefined) this.explanations.push({
                display: JCDietrich.display,
                content: dietrichExplanation
            });

            if (loeheExplanation != undefined) this.explanations.push({
                display: Loehe.display,
                content: loeheExplanation
            });

            return;
        }

        const { sections:{[sectionID]: stumpExplanation}} = Stump;
        const { sections:{[sectionID]: dietrichExplanation } } = JCDietrich;
        const { sections:{[sectionID]: loeheExplanation } } = Loehe;
        this.explanations = [];

        if (stumpExplanation != undefined) this.explanations.push({
            display: Stump.display,
            content: stumpExplanation
        });

        if (dietrichExplanation != undefined) this.explanations.push({
            display: JCDietrich.display,
            content: dietrichExplanation
        });

        if (loeheExplanation != undefined) this.explanations.push({
            display: Loehe.display,
            content: loeheExplanation
        });

    }

   


}