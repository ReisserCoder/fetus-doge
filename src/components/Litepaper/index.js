import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import File from '../../files/litepaper.pdf';

import {
  LitepaperContainer,
  Footer,
  Buttonc
} from './LitepaperElements'

export default function Litepaper() {
	
pdfjs.GlobalWorkerOptions.workerSrc =
`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);

document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});
	
function onDocumentLoadSuccess({ numPages }) {
	setNumPages(numPages);
	setPageNumber(1);
}

function changePage(offset) {
	setPageNumber(prevPageNumber => prevPageNumber + offset);
}

function previousPage() {
	changePage(-1);
}

function nextPage() {
	changePage(1);
}

return (
	<>
	<LitepaperContainer >
	<Document
		file={File}
		onLoadSuccess={onDocumentLoadSuccess}
	>
		<Page pageNumber={pageNumber} />
	</Document>
	<Footer>
		<div className="pagec">
		Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
		</div>
		<Buttonc>
		<button
		type="button"
		disabled={pageNumber <= 1}
		onClick={previousPage}
		className="Pre"
			
		>
		Previous
		</button>
		<button
		type="button"
		disabled={pageNumber >= numPages}
		onClick={nextPage}
		
		>
		Next
		</button>
		<a
		onClick='onClick'
		href='/'
		>
		Home
		</a>
		</Buttonc>
	</Footer>
	</LitepaperContainer>
	</>
);
}

