import { deleteRow } from './crud';
import { insertRow } from './crud';
import { RowId, RowElement} from './interface';

export function insertRow(row: RowElement): number;

export function deleteRow(rowid: RowId): void;

export function updateRow(rowid: RowId, row: RowElement): RowId;